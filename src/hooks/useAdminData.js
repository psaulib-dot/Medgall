import { useState, useEffect, useCallback } from 'react';
import { getAllAdminData } from '../supabaseService';

export const useAdminData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const adminData = await getAllAdminData();
      setData(adminData);
    } catch (error) {
      console.error("Error fetching admin data:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, refreshData: fetchData };
};
