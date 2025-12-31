
import React from 'react';
import { 
  CreditCard, 
  Users, 
  ClipboardCheck, 
  Settings2,
  Download,
  Filter,
  MoreVertical
} from 'lucide-react';

const Admin: React.FC = () => {
  const staff = [
    { id: '1', name: 'Dr. Emily Blunt', role: 'Head of Department', department: 'Science', status: 'Active' },
    { id: '2', name: 'James Wilson', role: 'Assistant Professor', department: 'Arts', status: 'On Leave' },
    { id: '3', name: 'Sophia Loren', role: 'Lecturer', department: 'Commerce', status: 'Active' },
    { id: '4', name: 'Michael Bay', role: 'Lab Technician', department: 'Science', status: 'Active' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Institutional Administration</h1>
        <p className="text-slate-500">Manage finances, faculty, and operational workflows.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
              <CreditCard className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-emerald-600">+18% vs prev. month</span>
          </div>
          <h4 className="text-sm font-medium text-slate-500">Revenue (Fees Collected)</h4>
          <p className="text-2xl font-bold text-slate-900 mt-1">$428,290.00</p>
          <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between text-xs">
            <span className="text-slate-400">Total Pending:</span>
            <span className="font-bold text-rose-500">$24,120.00</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg">
              <Users className="w-6 h-6" />
            </div>
          </div>
          <h4 className="text-sm font-medium text-slate-500">Staff Payroll Status</h4>
          <p className="text-2xl font-bold text-slate-900 mt-1">98% Processed</p>
          <div className="mt-4 pt-4 border-t border-slate-100">
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div className="bg-indigo-500 h-full w-[98%]"></div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-amber-100 text-amber-600 rounded-lg">
              <ClipboardCheck className="w-6 h-6" />
            </div>
          </div>
          <h4 className="text-sm font-medium text-slate-500">Compliance & Audit</h4>
          <p className="text-2xl font-bold text-slate-900 mt-1">Excellent (9.4/10)</p>
          <p className="text-xs text-slate-400 mt-2">Next Audit: 15 days left</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="px-6 py-4 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h3 className="font-bold text-slate-900">Faculty & Staff Management</h3>
          <div className="flex items-center space-x-2">
            <button className="p-2 text-slate-400 hover:text-slate-600 border border-slate-200 rounded-lg">
              <Filter className="w-4 h-4" />
            </button>
            <button className="flex items-center px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50">
              <Download className="w-4 h-4 mr-2" />
              Export
            </button>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700">
              Add New Staff
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                <th className="px-6 py-4 font-semibold">Name</th>
                <th className="px-6 py-4 font-semibold">Role</th>
                <th className="px-6 py-4 font-semibold">Department</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {staff.map((member) => (
                <tr key={member.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600 uppercase">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="text-sm font-medium text-slate-900">{member.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">{member.role}</td>
                  <td className="px-6 py-4 text-sm text-slate-500">{member.department}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${
                      member.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {member.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-400 hover:text-indigo-600">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
