# 🌍 Saelix - Infrastructure Management Platform

**Saelix Slate** is an enterprise-grade, unified GIS and fleet management platform designed for water utilities, municipalities, and infrastructure operators.

## 🎯 What is Saelix Slate?

A comprehensive platform that combines:
- **GIS Asset Management** - Interactive mapping and real-time status of infrastructure
- **CCTV Inspection Management** - Defect tracking and photo galleries
- **Work Order Automation** - Auto-generated from inspection findings
- **Fleet Operations** - Crew scheduling, dispatch, and performance tracking
- **Compliance Reporting** - Regulatory documentation and audit trails
- **AI-Powered Analytics** - Gemini integration for intelligent insights

## 🏗️ Tech Stack

**Frontend:**
- React 19.2.1
- TypeScript
- Tailwind CSS / Custom CSS
- React Router
- Lucide Icons

**Backend:**
- FastAPI (Python)
- Jinja2
- SQLAlchemy

## 📋 8 Core Modules

1. **Dashboard** - Real-time KPI overview and critical alerts
2. **GIS Map** - Interactive mapping with asset visualization and editing
3. **Inspections** - CCTV inspection records and defect management
4. **Work Orders** - Job creation, assignment, and tracking
5. **Scheduling** - Crew availability and shift planning
6. **Inventory** - Materials and parts tracking
7. **Reports** - Custom reporting and compliance documentation
8. **Analytics** - Advanced metrics and predictive analysis

## 🎯 Target Market

- Municipal Water Departments
- Sewer Utilities
- Stormwater Management Agencies
- Wastewater Treatment Operators
- Infrastructure Consulting Firms
- Private Contractors

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/hewcarroll/Saelix.git
cd Saelix

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

## 📁 Project Structure

```
Saelix/
├── components/          # Reusable UI components
├── pages/              # Feature modules (Home, SaelixSlate)
├── constants.ts        # Product and configuration data
├── types.ts            # TypeScript interfaces
├── styles.css          # Global and component styles
├── App.tsx             # Main application component
└── README.md           # This file
```

## 🔐 Security & Compliance

### Role-Based Access Control
- **Administrator** - Full system access
- **Operator** - Field operations (Map, Inspections, Work Orders, Inventory)
- **QA Reviewer** - Quality assurance (Inspections, Reports, Analytics)
- **Client Viewer** - Read-only stakeholder access

### Compliance Standards
- NASSCO (National Association of Sewer Service Companies)
- EPA regulations
- OSHA safety certifications
- State/local utility requirements

## 📊 Data Models

### Key Entities
- **Inspections** - CCTV inspection records with defect tracking
- **Work Orders** - Repair/maintenance jobs with priority levels
- **Assets** - Infrastructure items (Manholes, Pipes, Laterals) with GIS coordinates
- **Employees** - Field crew members with certifications
- **Inventory** - Parts and materials with stock tracking
- **Tasks** - Subtasks within work orders for checklist management
- **Notifications** - Real-time alerts and status updates

## 🔄 Workflow

```
Field Inspection
     ↓
Upload to Saelix Slate
     ↓
QA Review & AI Analysis
     ↓
Auto-Generate Work Orders
     ↓
Dispatch to Crews
     ↓
Execution & Tracking
     ↓
Compliance Reporting
```

## 🎨 Design System

### Colors
- **Primary:** #0066CC (Professional Blue)
- **Text Primary:** #111827 (Dark Gray)
- **Text Secondary:** #6B7280 (Medium Gray)
- **Background:** #FFFFFF (White)
- **Accent:** #10B981 (Success Green)

### Typography
- **Font:** System fonts (-apple-system, Segoe UI, etc.)
- **Sizes:** 12px - 40px (scalable)
- **Weights:** 400, 500, 600, 700

## 📱 Responsive Design

- **Desktop** (> 1024px) - Full featured layouts
- **Tablet** (768px - 1024px) - Optimized 2-column layouts
- **Mobile** (< 768px) - Single column, touch-friendly

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages
```bash
npm run deploy
```

## 📚 Documentation

See the following for more information:
- [Saelix Slate Analysis](./SAELIX_SLATE_ANALYSIS.md) - Comprehensive product overview
- [Update Summary](./UPDATE_SUMMARY.md) - Recent website updates

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

For inquiries about Saelix Slate, please contact: collaborate@saelix.org

---

**Saelix Slate** - Transforming Infrastructure Operations 🚀
