import dynamic from 'next/dynamic';

const MonitorPage = dynamic(() => import('@/components/pages/Monitor/MonitorPage'), { ssr: false });

export default function MonitorRoutePage() {
  return <MonitorPage />;
}
