"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { Badge } from "./badge";
import { TrendingUp, Clock, DollarSign, Target, AlertTriangle, CheckCircle } from "lucide-react";

export default function CaseStudyAccounting() {
  const keyMetrics = [
    {
      icon: TrendingUp,
      label: "ROI in First Year",
      value: "$278,000",
      subtitle: "4.4x return on investment"
    },
    {
      icon: Clock,
      label: "Admin Time Saved",
      value: "480+ hours/year",
      subtitle: "$38,400 billable value recovered"
    },
    {
      icon: DollarSign,
      label: "Cash Flow Improvement",
      value: "£220K",
      subtitle: "Additional liquidity"
    },
    {
      icon: Target,
      label: "On-Time Delivery",
      value: "96%",
      subtitle: "Improved from 80%"
    }
  ];

  const problems = [
    {
      icon: AlertTriangle,
      title: "Manual Data Entry",
      description: "Client data re-entered across multiple tools",
      impact: "~12 hours/month lost per employee"
    },
    {
      icon: AlertTriangle,
      title: "Delayed Invoicing",
      description: "Manual month-end invoicing process",
      impact: "38 days receivables (vs 21 industry benchmark)"
    },
    {
      icon: AlertTriangle,
      title: "Fragmented Workflow",
      description: "Email and spreadsheet-based management",
      impact: "15-20% tasks delivered late"
    },
    {
      icon: AlertTriangle,
      title: "No Real-Time Tracking",
      description: "Quarterly profitability reviews only",
      impact: "Low-margin work persisted unnoticed"
    },
    {
      icon: AlertTriangle,
      title: "Compliance Risk",
      description: "Manual deadline reminders",
      impact: "£5K-£15K regulatory risk/year"
    }
  ];

  const solutions = [
    {
      icon: CheckCircle,
      title: "AI Integration Hub",
      description: "CRM, Xero, and document management via Zapier & Make.com",
      benefit: "95% reduction in duplicate entry"
    },
    {
      icon: CheckCircle,
      title: "Auto-Invoicing System",
      description: "Triggered upon task completion with AI payment reminders",
      benefit: "Receivables reduced from 38 → 19 days"
    },
    {
      icon: CheckCircle,
      title: "AI-Enhanced Project Board",
      description: "ClickUp with auto-prioritization",
      benefit: "96% on-time delivery rate"
    },
    {
      icon: CheckCircle,
      title: "Real-Time P&L Dashboard",
      description: "AI dashboard pulling live data from accounting + time tracking",
      benefit: "Early detection of low-margin clients"
    },
    {
      icon: CheckCircle,
      title: "Automated Compliance Calendar",
      description: "AI-driven deadline alerts and reminders",
      benefit: "Zero missed deadlines in 6 months"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <Badge variant="secondary" className="text-sm px-4 py-2">
          Case Study #1 — Professional Services Firm
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Accounting Firm Transformation
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          How a £6.5M accounting firm achieved 4.4x ROI through AI-powered process automation
        </p>
      </div>

      {/* Client Overview */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0">
        <CardContent className="p-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-2xl font-bold text-blue-600">£6.5M</h3>
              <p className="text-muted-foreground">Annual Revenue</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-purple-600">40</h3>
              <p className="text-muted-foreground">Employees</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-green-600">14 Days</h3>
              <p className="text-muted-foreground">Audit Duration</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Metrics */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {keyMetrics.map((metric, index) => (
          <Card key={index} className="text-center">
            <CardContent className="p-6">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <metric.icon className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">{metric.value}</h3>
              <p className="text-sm font-medium mb-1">{metric.label}</p>
              <p className="text-xs text-muted-foreground">{metric.subtitle}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Problem vs Solution */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Problems */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-red-600 mb-6">Problems Identified</h2>
          <div className="space-y-4">
            {problems.map((problem, index) => (
              <Card key={index} className="border-red-200 bg-red-50">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <problem.icon className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-red-800">{problem.title}</h4>
                      <p className="text-sm text-red-700 mb-2">{problem.description}</p>
                      <Badge variant="destructive" className="text-xs">
                        Impact: {problem.impact}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Solutions */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-green-600 mb-6">AI-Powered Solutions</h2>
          <div className="space-y-4">
            {solutions.map((solution, index) => (
              <Card key={index} className="border-green-200 bg-green-50">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <solution.icon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-green-800">{solution.title}</h4>
                      <p className="text-sm text-green-700 mb-2">{solution.description}</p>
                      <Badge variant="default" className="text-xs bg-green-600">
                        Benefit: {solution.benefit}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Results Timeline */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-center">90-Day Transformation Results</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-b from-blue-50 to-blue-100 rounded-lg">
              <h4 className="text-lg font-semibold text-blue-800 mb-2">Month 1</h4>
              <p className="text-sm text-blue-700">AI dashboard implementation, automated invoicing</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-b from-purple-50 to-purple-100 rounded-lg">
              <h4 className="text-lg font-semibold text-purple-800 mb-2">Month 2</h4>
              <p className="text-sm text-purple-700">Workflow automation, compliance calendar setup</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-b from-green-50 to-green-100 rounded-lg">
              <h4 className="text-lg font-semibold text-green-800 mb-2">Month 3</h4>
              <p className="text-sm text-green-700">Full optimization, £72K profit increase identified</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Testimonial */}
      <Card className="bg-gradient-to-r from-gray-50 to-gray-100">
        <CardContent className="p-8 text-center">
          <blockquote className="text-xl italic text-gray-700 mb-4">
            "Before Finstone, we were drowning in admin, chasing invoices, and guessing profitability. Within weeks, our processes ran smoother than ever. The AI dashboard alone paid for the audit in the first month."
          </blockquote>
          <p className="font-semibold text-gray-800">— Managing Partner, Accounting Firm</p>
        </CardContent>
      </Card>

      {/* Engagement Summary */}
      <Card className="border-2 border-blue-200">
        <CardHeader>
          <CardTitle className="text-center text-blue-800">Engagement Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="text-lg font-semibold text-blue-600">Service</h4>
              <p className="text-sm text-muted-foreground">Finstone AI Audit™ + Implementation</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-600">Duration</h4>
              <p className="text-sm text-muted-foreground">Audit: 14 days, Implementation: 30 days</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-600">Total ROI</h4>
              <p className="text-sm text-muted-foreground">$278,000 (4.4x return)</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


