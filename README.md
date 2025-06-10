## 1. Setup: Next.js CRUD App with MongoDB Atlas
### Tech Stack
# Frontend & Backend: Next.js (with App Router or Pages Router)

# Database: MongoDB Atlas (Free Tier)

### Features
CRUD operations (Create, Read, Update, Delete) for items like blog posts or tasks.

API Routes for backend logic (or Express if preferred).

### Setup Steps
Initialize project:

```
npx create-next-app@latest nextjs-crud-app
cd nextjs-crud-app
```

### Install dependencies:

```
npm install mongoose
```

### Connect to MongoDB:

Create a .env.local file:

```
MONGODB_URI=your_mongodb_atlas_connection_string
```

Create /app/api/items/route.js (or /pages/api/items.js if using Pages Router) for CRUD API.

Add a simple form UI for CRUD operations (optional: Tailwind CSS or plain CSS).

Push to GitHub:

```
git init
git remote add origin <your-repo-url>
git add .
git commit -m "Initial commit"
git push origin main
```

## 2. AWS EC2 Setup (Ubuntu 22.04 Free Tier)
🔧 Launch EC2 Instance
Go to AWS EC2 console → Launch Instance:

AMI: Ubuntu 22.04

Instance Type: t2.micro

Key Pair: Create/download one

Security Group:

Allow SSH (22), HTTP (80), and optionally HTTPS (443)

SSH into EC2:

```
ssh -i your-key.pem ubuntu@your-ec2-public-ip
```

### Install Node.js & PM2:

```
sudo apt update && sudo apt install -y nodejs npm
sudo npm install -g pm2
```

### Install and configure Nginx:

```
sudo apt install nginx
sudo systemctl start nginx
```

## 3. Deploy the App to EC2
🔧 Steps:
Clone the repo:

```
git clone https://github.com/yourusername/nextjs-crud-app.git
cd nextjs-crud-app
```

### install dependencies & build:

```
npm install
npm run build
npm start
```

Or use PM2:

```
pm2 start npm --name "nextjs-app" -- start
pm2 save
```

### Configure Nginx:

```
sudo nano /etc/nginx/sites-available/default
```


```
sudo nginx -t
sudo systemctl restart nginx
```


## 4. AWS S3 for Static Assets (Optional)
Create an S3 bucket (e.g., nextjs-crud-assets).

Upload images or static files via AWS Console or AWS CLI.

Set bucket/public access or use a signed URL.

Optionally, integrate the image URLs into your MongoDB schema.


## 5. CI/CD Pipeline with GitHub Actions
🔧 GitHub Workflow
Create .github/workflows/deploy.yml:
🛡️ Save your EC2 IP, SSH private key as GitHub secrets:

EC2_HOST: EC2 public IP

EC2_KEY: Private key contents (PEM file)