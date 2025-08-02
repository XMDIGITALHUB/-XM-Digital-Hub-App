import TeamManagement from '@/components/Settings/TeamManagement';
import PlanSelector from '@/components/Settings/PlanSelector';
import BillingInfo from '@/components/Settings/BillingInfo';
import IntegrationList from '@/components/Settings/IntegrationList';

export default function Settings() {
  return (
    <div className="p-8 space-y-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold">Admin & Billing</h1>
      <TeamManagement />
      <PlanSelector />
      <BillingInfo />
      <IntegrationList />
    </div>
  );
}
