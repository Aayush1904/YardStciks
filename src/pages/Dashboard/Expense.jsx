import React, { useEffect, useState } from 'react'
import DashboardLayout from '../../components/layouts/DashboardLayout';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import toast from 'react-hot-toast';
import ExpenseOverview from '../../components/Expense/ExpenseOverview';
import Modal from '../../components/Modal';
import AddExpenseForm from '../../components/Expense/AddExpenseForm';
import ExpenseList from '../../components/Expense/ExpenseList';
import DeleteAlert from '../../components/DeleteAlert';

const Expense = () => {
  const [expenseData, setExpenseData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [openDeleteAlert , setOpenDeleteAlert] = useState({
      show: false,
      data: null,
    });
    const [openAddExpenseModal , setOpenAddExpenseModal] = useState(false);


      //Get All Expense Details : 
  const fetchExpenseDetails = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const response = await axiosInstance.get(`${API_PATHS.EXPENSE.GET_ALL_EXPENSE}`);
      if (response.data) {
        setExpenseData(response.data); 
      }
    } catch (error) {
      console.error("Error fetching income data:", error);
    } finally {
      setLoading(false);
    }
  }

  //Handle Add Expense :
  const handleAddExpense = async (expense) => {
    const { category, amount, date, icon } = expense;

    if(!category.trim()){
      toast.error("Category is required");
      return;
    }
    
    if(!amount || isNaN(amount) || amount <= 0){
      toast.error("Valid amount is required");
      return;
    }

    if(!date){
      toast.error("Date is required");
      return;
    }

    try{
       await axiosInstance.post(API_PATHS.EXPENSE.ADD_EXPENSE, {
        category,
        amount,
        date,
        icon
      });
      setOpenAddExpenseModal(false);
      toast.success("Expense added successfully");
      fetchExpenseDetails(); // Refresh income data after adding
      
    }catch(error) {
      console.error("Error adding expense:", error);
      toast.error("Failed to add expense");
    }
  };

  // Delete Expense:
const deleteExpense = async (id) => {
  try {
    await axiosInstance.delete(API_PATHS.EXPENSE.DELETE_EXPENSE(id));
    setOpenDeleteAlert({ show: false, data: null });
    toast.success("Expense deleted successfully");
    fetchExpenseDetails(); // Refresh expense data after deletion
  } catch (error) {
    console.error("Error deleting expense:", error);
    toast.error("Failed to delete expense");
  }
};


    //Handle download Income Details : 
    const handleDownloadExpenseDetails = async () => {
      try {
        const response = await axiosInstance.get(API_PATHS.EXPENSE.DOWNLOAD_EXPENSE , {responseType : "blob"})

        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download" , "expense_details.xlsx");
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
        window.URL.revokeObjectURL(url);
      } catch (error) {
        console.error("Error downloading the expense details" , error);
        toast.error("Failed to download expense details. please try again later")
      }
    };

  useEffect(() => {
    fetchExpenseDetails();
    return () => {};
  } , [])


  return (
    <DashboardLayout activeMenu = "Expense">
      <div className='my-5 mx-auto'>
          <div className='grid grid-cols-1 gap-6'>
            <div className=''>
              <ExpenseOverview transactions = {expenseData} onExpenseIncome = {() => setOpenAddExpenseModal(true)} />
            </div>
            <ExpenseList transactions = {expenseData} onDelete={(id) => {
            setOpenDeleteAlert({ show: true, data: id });
          }} onDownload = {handleDownloadExpenseDetails} />
          </div>
          <Modal isOpen = {openAddExpenseModal} onClose={() => setOpenAddExpenseModal(false)} title = "Add Expense" >
          <div>
            <AddExpenseForm onAddExpense = {handleAddExpense} />
          </div>
        </Modal>

        <Modal isOpen = {openDeleteAlert.show} onClose={() => setOpenDeleteAlert({ show: false, data: null })} title = "Delete Expense" >
          <DeleteAlert content = "Are your sure you want to delete this Expense ? " onDelete = {() => deleteExpense(openDeleteAlert.data)}/>
        </Modal>
      </div>
    </DashboardLayout>
  )
}

export default Expense
