"use client";
import React from "react";
import { TrendingDown, TrendingUp, CheckCircle, XCircle } from "lucide-react";

export function DashboardComparison() {
  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
             {/* Before Dashboard - Bad Numbers */}
       <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 border-2 border-purple-200 dark:border-purple-800">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Before: Manual Chaos</h3>
          <p className="text-gray-600 dark:text-gray-300">Inefficient processes costing money</p>
        </div>
        
        {/* Top Row - Key Metrics */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white dark:bg-gray-700 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-red-600 dark:text-red-400">$0</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Monthly Savings</div>
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-red-600 dark:text-red-400">0 hrs</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Hours Recovered</div>
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-red-600 dark:text-red-400">-5%</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Profit Margin</div>
          </div>
        </div>
        
        {/* Middle Row - Charts */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white dark:bg-gray-700 rounded-xl p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <TrendingDown className="w-8 h-8 text-red-500" />
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Declining Cash Flow</div>
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-xl p-4 text-center">
            <div className="w-16 h-16 mx-auto mb-2 relative">
              <div className="w-full h-full rounded-full border-4 border-gray-300 dark:border-gray-600"></div>
              <div className="absolute inset-0 rounded-full border-4 border-red-500" style={{ clipPath: 'inset(0 75% 0 0)' }}></div>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">No Automation</div>
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-xl p-4 text-center">
            <div className="space-y-1 mb-2">
              <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded"></div>
              <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded"></div>
              <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded"></div>
              <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded"></div>
              <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded"></div>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Low Profitability</div>
          </div>
        </div>
        
        {/* Bottom Row - Problems */}
        <div className="bg-white dark:bg-gray-700 rounded-xl p-4">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-center">Current Problems</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
              <XCircle className="w-4 h-4 text-red-500" />
              <span>Manual Invoicing → $0 saved</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
              <XCircle className="w-4 h-4 text-red-500" />
              <span>Slow Reporting → $0 saved</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
              <XCircle className="w-4 h-4 text-red-500" />
              <span>Compliance Errors → $0 saved</span>
            </div>
          </div>
        </div>
      </div>

             {/* After Dashboard - Good Numbers */}
       <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-6 border-2 border-purple-200 dark:border-purple-800">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">After: AI-Powered Clarity</h3>
          <p className="text-gray-600 dark:text-gray-300">Automated efficiency delivering results</p>
        </div>
        
        {/* Top Row - Key Metrics */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white dark:bg-gray-700 rounded-xl p-4 text-center shadow-lg">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">$45,000</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Monthly Savings</div>
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-xl p-4 text-center shadow-lg">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">120 hrs</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Hours Recovered</div>
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-xl p-4 text-center shadow-lg">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">+18%</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Profit Margin</div>
          </div>
        </div>
        
        {/* Middle Row - Charts */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white dark:bg-gray-700 rounded-xl p-4 text-center shadow-lg">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="w-8 h-8 text-green-500" />
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Rising Cash Flow</div>
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-xl p-4 text-center shadow-lg">
            <div className="w-16 h-16 mx-auto mb-2 relative">
              <div className="w-full h-full rounded-full border-4 border-gray-300 dark:border-gray-600"></div>
              <div className="absolute inset-0 rounded-full border-4 border-green-500" style={{ clipPath: 'inset(0 25% 0 0)' }}></div>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">75% Automated</div>
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-xl p-4 text-center shadow-lg">
            <div className="space-y-1 mb-2">
              <div className="h-3 bg-green-400 rounded"></div>
              <div className="h-3 bg-green-300 rounded"></div>
              <div className="h-3 bg-green-200 rounded"></div>
              <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded"></div>
              <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded"></div>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">High Profitability</div>
          </div>
        </div>
        
        {/* Bottom Row - Quick Wins */}
        <div className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-lg">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-center">Quick Wins</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Automated Invoicing → $15K saved</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Faster Reporting → $8K saved</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Compliance Errors Removed → $22K saved</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
