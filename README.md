# HostelDaze - Hostel Booking Application

**HostelDaze** is a hostel booking platform designed with two interfaces: **warden** and **student**. This app streamlines hostel management, enabling students to book their beds and wardens to manage room occupancy efficiently. It features real-time indicators for booked and vacant beds.

---

## ✨ Features

- **Dual Interfaces**:
  - **Warden**: Manage rooms, vacate students, and monitor room occupancy.
  - **Student**: Book beds, view availability, and search for roommates by name.
- **Real-Time Indicators**: Visual indicators for booked and vacant beds.
- **Room Booking**: Each room has 3 beds, and students can book one of them.
- **Room Search**: Students can search for rooms by another student’s name.
- **Vacancy Management**: Wardens can vacate individual students or entire rooms.
- **Scalable and Fast**: Built with modern technologies for a smooth experience.
- **Live Demo**: [Try it live here](https://hostel-daze.vercel.app/).

---

## 🚀 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or Yarn

### Steps to Install

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/ManashAnand/HostelDaze.git
   cd HostelDaze
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```

4. **Build the Project**:
   ```bash
   npm run build
   ```

5. **Start the Production Server**:
   ```bash
   npm start
   ```

---

## 🛠️ Development

### Running in Development Mode
To test changes locally, use the following command:
```bash
npm run dev
```

This starts a local development server and watches for file changes.

---

## 📁 Project Structure

```plaintext
HostelDaze/
├── Models/                 # Added rooms
├── app/                    # Added health route
├── assets/                 # Added search functionality for users
├── components/             # Added real-time updates
├── data/                   # Added GUI interface for booking
├── lib/                    # Integrated Cloudinary
├── public/                 # Integrated Cloudinary
├── redux/                  # Added Redux for state management
├── .dockerignore           # Added Dockerfile
├── .env                    # Added health route
├── .eslintrc.json          # Integrated Cloudinary
├── .gitignore              # Removing .env file
├── Dockerfile              # Added Dockerfile
├── LICENSE                 # Create LICENSE
├── README.md               # Update README.md
├── jsconfig.json           # Integrated Cloudinary
├── next.config.js          # Added Redux for state management
├── package-lock.json       # Added personal profile
├── package.json            # Added personal profile
├── postcss.config.js       # Integrated Cloudinary
├── tailwind.config.js      # Integrated Cloudinary
```

---

## 🤝 Contributing

Contributions are welcome! Here's how you can contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Create a Pull Request.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 📞 Support

If you encounter any issues or have questions, feel free to open an [issue](https://github.com/ManashAnand/HostelDaze/issues) or reach out.

---

## 🌟 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- State management powered by [Redux](https://redux.js.org/)
- Image hosting and processing via [Cloudinary](https://cloudinary.com/)
