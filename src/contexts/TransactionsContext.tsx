import { createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Transaction {
  id: string;
  description: string;
  type: 'income' | 'outcome';
  category: string;
  price: number;
  createdAt: string;
}

interface CreateTransactionsInput {
  description: string;
  price: number;
  category: string;
  type: 'income' | 'outcome';

}
interface TransactioContextType {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>;
  createTransactions: (data: CreateTransactionsInput) => Promise<void>;
}

interface TransactionsProviderProps {
  children: React.ReactNode;
}
export const TransactionsContext = createContext({} as TransactioContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function fetchTransactions(query?: string) {
    const resp = await api.get('/transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query
      }
    })

    setTransactions(resp.data)
  }

  async function createTransactions(data: CreateTransactionsInput) {
    const { description, price, category, type } = data;

    const response = await api.post('transactions', {
      description,
      price,
      category,
      type,
      createdAt: new Date(),
    })

    setTransactions(state => [response.data, ...state])
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider value={{
      transactions,
      fetchTransactions,
      createTransactions,
    }}>
      {children}
    </TransactionsContext.Provider>
  )
}