import React, { useEffect, useState } from 'react'
import CustomePieChart from '../Charts/CustomePieChart';

const COLORS = ["#875CF5" , "#FA2C37" , "#FF6900" , "#4f39f6"]

const RecentIncomeWithChart = ({data , totalIncome}) => {
    const [chartData, setChartData] = useState([]);

    const prepareChartData = () => {
        const dataArr = data?.map((item) => ({
                name: item?.source,
                amount: item?.amount
        }));
        setChartData(dataArr);
    }

    useEffect(() => {
        prepareChartData();
        return () => {}
    } , [data])

  return (
    <div className='card'>
      <div className='flex items-center justify-between'>
        <h5 className='text-lg'>Last 60 Days Income</h5>
      </div>

      <CustomePieChart data = {chartData} label = "Total Income" totalAmount={`₹${totalIncome}`} showTextAnchor color={COLORS} />
    </div>
  )
}

export default RecentIncomeWithChart
