export const BASE_URL = "https://yardsticks-backend.onrender.com";

export const API_PATHS = {
  DASHBOARD: {
    GET_DATA: "/api/v1/dashboard",
  },
  INCOME: {
    ADD: "/api/v1/income/add",
    GET_ALL_INCOME: "/api/v1/income/get",
    DELETE_INCOME: (incomeId) => `/api/v1/income/${incomeId}`,
    DOWNLOAD_INCOME: `/api/v1/income/downloadexcel`,
  },
  EXPENSE: {
    ADD_EXPENSE: "/api/v1/expense/add",
    GET_ALL_EXPENSE: "/api/v1/expense/get",
    DELETE_EXPENSE: (expenseId) => `/api/v1/expense/${expenseId}`,
    DOWNLOAD_EXPENSE: `/api/v1/expense/downloadexcel`,
  },
  BUDGET: {
    ADD_BUDGET: "/api/v1/budget/add",
    GET_ALL_BUDGET: "/api/v1/budget/get",
    DELETE_BUDGET: (budgetId) => `/api/v1/budget/${budgetId}`,
  },
};
