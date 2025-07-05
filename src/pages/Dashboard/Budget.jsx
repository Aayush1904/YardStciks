import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import { API_PATHS } from '../../utils/apiPaths';
import axiosInstance from '../../utils/axiosInstance';
import Modal from '../../components/Modal';
import AddBudgetForm from '../../components/Budget/AddBudgetForm';
import DeleteAlert from '../../components/DeleteAlert';
import BudgetList from '../../components/Budget/BudgetList';
import { toast } from 'react-hot-toast';
import BudgetPieChart from '../../components/Budget/BudgetPieChart';
import BudgetLineChart from '../../components/Budget/BudgetLineChart';

const Budget = () => {
  const [budgets, setBudgets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openDeleteAlert, setOpenDeleteAlert] = useState({
    show: false,
    data: null,
  });

  const fetchBudgets = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const response = await axiosInstance.get(API_PATHS.BUDGET.GET_ALL_BUDGET);
      if (response.data) setBudgets(response.data);
    } catch (error) {
      console.error("Error fetching budgets", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddBudget = async (budget) => {
    const { category, amount, month } = budget;
    if (!category.trim()) return toast.error("Category is required");
    if (!amount || amount <= 0) return toast.error("Amount should be valid");
    if (!month) return toast.error("Month is required");

    try {
      await axiosInstance.post(API_PATHS.BUDGET.ADD_BUDGET, budget);
      setOpenAddModal(false);
      toast.success("Budget added successfully");
      fetchBudgets();
    } catch (error) {
      console.error("Error adding budget", error);
      toast.error("Failed to add budget");
    }
  };

  const handleDeleteBudget = async (id) => {
    try {
      await axiosInstance.delete(API_PATHS.BUDGET.DELETE_BUDGET(id));
      setOpenDeleteAlert({ show: false, data: null });
      toast.success("Budget deleted");
      fetchBudgets();
    } catch (error) {
      console.error("Error deleting budget", error);
      toast.error("Failed to delete budget");
    }
  };

  useEffect(() => {
    fetchBudgets();
  }, []);

  return (
    <DashboardLayout activeMenu="Budget">
      <div className="my-5 mx-auto">
        <div className="grid grid-cols-1 gap-6">
          
          {/* 🔹 Overview Section with heading & Add Button */}
          <div className="card">
            <div className="flex items-center justify-between mb-2">
              <h5 className="text-lg">Monthly Budgets</h5>
              <button
                className="add-btn"
                onClick={() => setOpenAddModal(true)}
              >
                + Add Budget
              </button>
            </div>

            {/* 🔹 Charts if budgets exist */}
            {budgets.length > 0 && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
                <BudgetPieChart budgets={budgets} />
                <BudgetLineChart data={budgets} />
              </div>
            )}
          </div>

          {/* 🔹 Budget List */}
          <BudgetList
            budgets={budgets}
            onDelete={(id) => setOpenDeleteAlert({ show: true, data: id })}
          />
        </div>

        {/* ➕ Add Modal */}
        <Modal
          isOpen={openAddModal}
          onClose={() => setOpenAddModal(false)}
          title="Add Budget"
        >
          <AddBudgetForm onAddBudget={handleAddBudget} />
        </Modal>

        {/* 🗑 Delete Alert */}
        <Modal
          isOpen={openDeleteAlert.show}
          onClose={() => setOpenDeleteAlert({ show: false, data: null })}
          title="Delete Budget"
        >
          <DeleteAlert
            content="Are you sure you want to delete this budget?"
            onDelete={() => handleDeleteBudget(openDeleteAlert.data)}
          />
        </Modal>
      </div>
    </DashboardLayout>
  );
};

export default Budget;
