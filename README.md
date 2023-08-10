# CodeClan

# Project Overview:

Welcome to CodeClan! This full-stack application provides a collaborative coding environment where developers can hone their skills through various coding katas. Whether you're looking to tackle challenges individually or pair up with fellow developers, CodeClan offers a platform for growth and collaboration. With a personal messaging system, a variety of katas, detailed user profiles, Firebase authentication, and the option to work solo or pair program, you have the tools you need to enhance your coding journey.

### Deployed Version

A hosted version of the project can be found at the link below.
You can try it out by visiting the website and exploring its features.

---------- DEPLOYED LINK HERE ---------------

### Features:

- **Firebase Authentication**: Securely login or sign up using Firebase authentication to access all the features CodeClan has to offer.

- **Code Mirror Editor**: Explore a diverse range of coding katas catering to different skill levels. Challenge yourself and expand your coding horizons.

- **Personal Messaging System**: Communicate with other users through a built-in messaging system. Share code snippets, discuss solutions, and collaborate effectively.

- **Detailed User Profiles**: Create and customise your user profile with a display name, profile image, and bio. Showcase your coding accomplishments and skills.

- **Solo or Pair Programming**: Choose your preferred mode of practice – work on katas independently to sharpen your skills, or team up with others for a collaborative coding experience.

- **Pair Request System**: Send pair requests to specific users or post open request invites visible to all users on their dashboard. Find coding partners and expand your coding network.

- **Meeting Room Integration**: Once your pair request is accepted, seamlessly open a meeting room directly from the kata page you're on. Share the link with your pair and dive into real-time coding collaboration.

### Technology Stack:

- Next.js 13
- Typescript
- Firebase
- Tailwind CSS

# Setup & Installation

Clone the Repository:  
git clone https://github.com/caffreydev/codeclan.git

Open a terminal and navigate to the root directory of the frontend project:  
cd codeclan

Install the necessary dependencies:  
npm install

# Firebase Setup

Firebase is used to provide authentication, data storage, and other features in CodeClan. To get started, follow these steps:

1. **Create a Firebase Project**:
   If you don't have a Firebase project, you can create one by visiting the [Firebase Console](https://console.firebase.google.com/).

2. **Obtain Firebase Configuration**:

   - Go to your project settings in the Firebase Console.
   - Click on the "Your apps" section and select the web app (</> icon).
   - Find the "Config" option (Project Settings - General) to access your Firebase configuration object.
   - Replace the placeholder values in the configuration with your actual Firebase project settings.
   - It should look like this but with your private details:

   ```javascript
   const firebaseConfig = {
     apiKey: 'your-api-key',
     authDomain: 'your-auth-domain',
     projectId: 'your-project-id',
     storageBucket: 'your-storage-bucket',
     messagingSenderId: 'your-messaging-sender-id',
     appId: 'your-app-id',
   };
   ```

## Secure Private Keys:

To keep your Firebase configuration settings secure, create an .env.local file in the root directory of your project and store your private keys there.
Make sure to add your .env file to your project's .gitignore to keep your private keys from being exposed in version control.

### .env.local

- NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
- NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
- NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
- NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
- NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
- NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id

### Run locallly

Start the frontend development server:  
npm run dev

Access the App:  
Open your web browser and navigate to http://localhost:3000 to access the local version of the application.

# Requirements

The minimum version required for running this project:

Node.js: v14 or higher

# Authors

- [Joe](https://github.com/caffreydev)
- [Damian](https://github.com/DamianMacG)
- [Jessica](https://github.com/jetakazono)
- [Kc Tan](https://github.com/kctan0814)
- [Asad](https://github.com/asazycat)

## Contributions

Contributions are welcome! If you encounter issues or have feature suggestions, please open an issue on the repository. Pull requests for bug fixes, improvements, and new features are also appreciated.

To contribute:

1. Fork the repository.
2. Create a new branch for your contribution.
3. Make your changes and commit them.
4. Submit a pull request.

## Recognition and Hall of Fame

We value the contributions of everyone and recognise their efforts. Contributors who make significant and meaningful contributions to the project will be add to the Hall of Fame!
