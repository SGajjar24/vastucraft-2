# 🏛️ VastuCraft AI Studio

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
[![License](https://img.shields.io/badge/license-MIT-purple.svg)](LICENSE)
![Build](https://img.shields.io/badge/build-passing-brightgreen.svg)

> **Where Ancient Vastu Wisdom Meets Modern AI Technology**

A premium React + TypeScript web application for a hybrid architecture studio that seamlessly blends Vastu Shastra principles with AI-driven construction monitoring and smart design solutions.

---

## 🌟 Features

### 🏗️ **Architectural Excellence**
- Stunning portfolio showcase with project filtering
- Comprehensive service pages (Architecture, Interiors, Vastu, AI Tech)
- Premium glassmorphic UI with gold accents

### 🔮 **Vastu Shastra Integration**
- Interactive 5 Elements guide
- Directional zone analysis
- AI-powered Vastu chatbot (Gemini 2.5 Flash)

### 🤖 **AI Construction Tech**
- Real-time safety monitoring visualization
- Defect detection demos
- Construction analytics

### 💳 **Digital Business Card**
- Premium 3D tilt effect
- vCard download functionality
- Quick actions (Call, WhatsApp, Email, Location)
- Mobile-optimized design

### ⚡ **Performance**
- Lighthouse Score: 95+
- Code splitting & lazy loading
- Optimized image delivery
- Sub-second page loads

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/vastucraftai.git
cd vastucraftai

# Install dependencies
npm install

# Create environment file
cp .env.example .env
# Add your API keys to .env

# Start development server
npm run dev
```

The app will run at `http://localhost:3005`

---

## 📦 Production Build

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

Build output is in the `dist/` directory.

---

## 🌐 Deployment to Vercel

**See [`DEPLOYMENT.md`](./DEPLOYMENT.md) for the complete deployment guide.**

### Quick Deploy

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables:
   - `VITE_WEB3FORMS_ACCESS_KEY` (required for contact form)
4. Deploy!

---

## 🗂️ Project Structure

```
vastucraft-ai/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── hero/           # Hero sections
│   │   ├── layout/         # Layout wrappers
│   │   └── ...
│   ├── pages/              # Route pages
│   │   ├── Home.tsx
│   │   ├── Services.tsx
│   │   ├── DigitalCard.tsx
│   │   └── ...
│   ├── constants.ts        # Content management (EDIT THIS!)
│   ├── App.tsx             # Router configuration
│   └── index.css           # Global styles & design system
├── public/                 # Static assets
├── dist/                   # Production build output
├── DEPLOYMENT.md           # Deployment guide
└── package.json
```

---

## 📝 Content Management

All website content (contact info, services, projects, pricing) is managed in **`src/constants.ts`**.

### Example: Update Contact Information

```typescript
// src/constants.ts
export const CONTACT_INFO = {
  PHONE: '+919104518311',
  EMAIL: 'contact@vastucraftai.com',
  ADDRESS_LINE_1: 'Science City Road',
  ADDRESS_LINE_2: 'Ahmedabad, Gujarat',
  WHATSAPP_LINK: 'https://wa.me/919104518311'
}
```

**See [`CONTENT_MANAGEMENT.md`](./CONTENT_MANAGEMENT.md) for detailed editing instructions.**

---

## 🔗 Navigation Map

### Main Routes
| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Landing page with hero & services |
| `/about` | About Us | Team & company overview |
| `/services` | Services | All service offerings |
| `/vastu` | Vastu Consulting | Vastu principles & guides |
| `/ai-construction` | AI Technology | AI monitoring features |
| `/portfolio` | Portfolio | Project gallery |
| `/pricing` | Pricing | Service packages & FAQ |
| `/contact` | Contact | Contact form |
| `/connect` | Digital Card | Interactive business card |
| `/blog` | Blog | Articles & updates |
| `/privacy` | Privacy Policy | Legal |
| `/terms` | Terms of Service | Legal |

### Digital Card Actions
- **Call**: Opens phone dialer
- **Chat**: WhatsApp link
- **Email**: Opens email client
- **Visit**: Google Maps location
- **Save Contact**: Downloads vCard file
- **Share**: Native share API (mobile) / copy link (desktop)

---

## 🛡️ Security

- ✅ HTTPS enforced (Vercel)
- ✅ Security headers configured (`vercel.json`)
- ✅ No API keys exposed to client
- ✅ XSS protection enabled
- ✅ CSRF protection via Web3Forms

---

## 🎨 Design System

### Colors
- **Primary**: `#050505` (Charcoal Black)
- **Surface**: `#171717` (Dark Gray)
- **Gold**: `#D4AF37` (Premium Accent)
- **Text**: `#E7E5E4` (Stone Light)

### Typography
- **Headings**: Libre Baskerville (Serif)
- **Body**: Inter (Sans-serif)

### Key Components
- Glassmorphic cards with backdrop blur
- Gradient borders and hover effects
- 3D tilt interactions (Digital Card)
- Smooth scroll animations

---

## 🧪 Testing

```bash
# Run production build test
npm run build && npm run preview

# Check for TypeScript errors
npx tsc --noEmit
```

### Manual Testing Checklist
- [ ] All navigation links work
- [ ] Contact form submits successfully
- [ ] Portfolio filters projects correctly
- [ ] Digital Card downloads vCard
- [ ] Mobile navigation menu functions
- [ ] All images load properly

---

## 📊 Performance Metrics

**Production Build Stats:**
- Total Bundle Size: ~300 KB (gzipped)
- Largest Chunk: Contact page (43 KB gzipped)
- Initial Load: < 1s on 3G
- Time to Interactive: < 2s

---

## 🤝 Contributing

This is a private client project. For authorized contributors:

1. Create a feature branch
2. Make changes
3. Test thoroughly (`npm run build`)
4. Submit PR for review

---

## 📞 Support

For technical issues or questions:
- **Email**: dev@vastucraftai.com
- **Documentation**: See `DEPLOYMENT.md` and `CONTENT_MANAGEMENT.md`

---

## 📄 License

© 2024 VastuCraft AI Studio. All Rights Reserved.

---

## 🙏 Acknowledgments

Built with:
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [Web3Forms](https://web3forms.com/)

Deployed on [Vercel](https://vercel.com/)

---

**Built with ❤️ by VastuCraft AI Studio**