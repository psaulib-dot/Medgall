import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { getAllAdminData } from '../supabaseService'; 
import { StatCard, StatIcon, StatInfo, StatLabel, StatValue } from '../components/StatCard'; // Reusable stat card
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const DashboardContainer = styled.div`
  padding: 30px;
  background-color: #f4f6f8;
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
`;

const ChartContainer = styled.div`
  background: #fff;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
`;

const AdminDashboard = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllAdminData();
        setStats(data);
      } catch (error) {
        console.error("Error fetching admin data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>{t('admin.loading')}</div>;
  }

  const placesPerCityChart = {
    labels: stats.cities.map(c => c.name_en),
    datasets: [{
      label: t('admin.placesPerCity'),
      data: stats.cities.map(c => stats.places.filter(p => p.city_id === c.id).length),
      backgroundColor: 'rgba(198, 167, 94, 0.7)',
    }]
  };

  const userRolesChart = {
    labels: [t('admin.visitor'), t('admin.admin')],
    datasets: [{
      data: [
        stats.users.filter(u => u.role === 'visitor').length,
        stats.users.filter(u => u.role === 'admin').length
      ],
      backgroundColor: ['#0F1C2E', '#C6A75E'],
    }]
  };

  return (
    <DashboardContainer>
      <SectionTitle>{t('admin.dashboard')}</SectionTitle>
      <Grid>
        <StatCard color="#C6A75E">
          <StatIcon>🌆</StatIcon>
          <StatInfo>
            <StatLabel>{t('admin.cities')}</StatLabel>
            <StatValue>{stats.cities.length}</StatValue>
          </StatInfo>
        </StatCard>
        <StatCard color="#0F1C2E">
          <StatIcon>🏞️</StatIcon>
          <StatInfo>
            <StatLabel>{t('admin.places')}</StatLabel>
            <StatValue>{stats.places.length}</StatValue>
          </StatInfo>
        </StatCard>
        <StatCard color="#5A5A5A">
          <StatIcon>👥</StatIcon>
          <StatInfo>
            <StatLabel>{t('admin.users')}</StatLabel>
            <StatValue>{stats.users.length}</StatValue>
          </StatInfo>
        </StatCard>
        <StatCard color="#E5D4A8">
          <StatIcon>📨</StatIcon>
          <StatInfo>
            <StatLabel>{t('admin.messages')}</StatLabel>
            <StatValue>{stats.messages.length}</StatValue>
          </StatInfo>
        </StatCard>
      </Grid>

      <Grid style={{ marginTop: '30px' }}>
        <ChartContainer>
          <SectionTitle>{t('admin.placesPerCity')}</SectionTitle>
          <Bar data={placesPerCityChart} options={{ responsive: true }} />
        </ChartContainer>
        <ChartContainer>
          <SectionTitle>{t('admin.userDistribution')}</SectionTitle>
          <Pie data={userRolesChart} options={{ responsive: true }} />
        </ChartContainer>
      </Grid>
    </DashboardContainer>
  );
};

export default AdminDashboard;
