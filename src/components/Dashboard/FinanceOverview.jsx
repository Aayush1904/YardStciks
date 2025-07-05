import React from 'react'
import CustomePieChart from '../Charts/CustomePieChart'

const COLORS = ["#875CF5" , "#FA23C7" , "#FF6900"]

const FinanceOverview = ({totalBalance , totalIncome , totalExpenses}) => {
    const balanceData = [
        { name: "Total Balance", amount: totalBalance},
        { name: "Total Expenses", amount: totalExpenses },
        { name: "Total Income", amount: totalIncome },
    ]
  return (
    <div className='card'>
        <div className='flex items-center justify-between'>
            <h5 className='text-lg'>Financial Overview</h5>
        </div>
        <CustomePieChart data= {balanceData} label = "Total Balance" totalAmount = {`₹${totalBalance}`} color = {COLORS} showTextAnchor />
    </div>
  )
}

export default FinanceOverview
