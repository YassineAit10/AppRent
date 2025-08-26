# RentMatch - Full-Stack Application

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository** (if not already done)
```bash
git clone <repository-url>
cd rentmatch
```

2. **Install all dependencies** (frontend + backend)
```bash
npm run install:all
```

### Running the Application

#### Option 1: Run Full-Stack (Recommended)
```bash
npm run dev
# or
npm run fullstack
```

This will start:
- Backend API on http://localhost:5000
- Frontend on http://localhost:4028

#### Option 2: Run Separately

**Backend only:**
```bash
npm run backend
```

**Frontend only:**
```bash
npm start
```

## 📁 Project Structure

```
rentmatch/
├── src/                    # Frontend React application
│   ├── components/         # Reusable UI components
│   ├── pages/             # Page components
│   ├── services/          # API service layer
│   └── styles/            # CSS styles
├── server/                # Backend Node.js/Express API
│   ├── routes/            # API routes
│   ├── middleware/        # Express middleware
│   ├── database/          # SQLite database
│   └── server.js          # Main server file
├── public/                # Static assets
└── start-fullstack.js     # Full-stack startup script
```

## 🔑 Environment Variables

### Frontend (.env)
```env
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME=RentMatch
```

### Backend (server/config.env)
```env
PORT=5000
NODE_ENV=development
JWT_SECRET=your-super-secret-jwt-key-change-in-production
DB_PATH=./database/rentmatch.db
```

## 📚 API Documentation

### Authentication Endpoints
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/me` - Update profile
- `POST /api/auth/logout` - Logout

### Properties Endpoints
- `GET /api/properties` - List properties
- `GET /api/properties/:id` - Get property details
- `POST /api/properties` - Create property (agents only)
- `PUT /api/properties/:id` - Update property
- `DELETE /api/properties/:id` - Delete property

### Rental Demands Endpoints
- `POST /api/rental-demands` - Create demand
- `GET /api/rental-demands` - List demands
- `GET /api/rental-demands/my-demands` - User's demands
- `PUT /api/rental-demands/:id` - Update demand
- `DELETE /api/rental-demands/:id` - Delete demand

### Offers Endpoints
- `POST /api/offers` - Create offer (agencies)
- `GET /api/offers/demand/:id` - Get offers for demand
- `PUT /api/offers/:id/accept` - Accept offer
- `PUT /api/offers/:id/reject` - Reject offer

### Bookings Endpoints
- `POST /api/bookings` - Create booking
- `GET /api/bookings/my-bookings` - User's bookings
- `PUT /api/bookings/:id/cancel` - Cancel booking

### Payments Endpoints
- `POST /api/payments/process` - Process payment
- `GET /api/payments/history` - Payment history
- `POST /api/payments/:id/refund` - Request refund

## 🧪 Test Accounts

### Client Account
- Email: `demo@rentmatch.fr`
- Password: `Demo123!`

### Agent Account
- Email: `agent@rentmatch.fr`
- Password: `Agent123!`

## 🛠️ Development

### Database Management
The application uses SQLite for development. The database file is located at:
```
server/database/rentmatch.db
```

### Adding New API Routes
1. Create route file in `server/routes/`
2. Import in `server/server.js`
3. Add route middleware: `app.use('/api/route-name', routeFile)`

### Adding New Frontend Services
1. Create service file in `src/services/`
2. Import the base API client from `src/services/api.js`
3. Export service methods

## 🐛 Troubleshooting

### Port Already in Use
If you get a port conflict error:
- Backend: Change `PORT` in `server/config.env`
- Frontend: Change port in `vite.config.mjs`

### Database Errors
If database errors occur:
1. Delete `server/database/rentmatch.db`
2. Restart the backend server (it will recreate the database)

### CORS Issues
Make sure the frontend URL is whitelisted in `server/server.js`:
```javascript
app.use(cors({
  origin: ['http://localhost:4028'],
  credentials: true
}));
```

## 📦 Production Deployment

### Build Frontend
```bash
npm run build
```

### Environment Variables
Update production environment variables:
- Set `NODE_ENV=production`
- Use secure JWT secret
- Configure proper CORS origins
- Use production database

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 💬 Support

For support, email support@rentmatch.fr or open an issue in the repository.