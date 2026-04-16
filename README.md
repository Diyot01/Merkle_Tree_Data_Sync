🌳 Merkle Tree Data Synchronisation

📌 Project Description
This project implements data synchronization using a Merkle Tree. A Merkle Tree is a tree-based data structure that uses hashing to efficiently verify and synchronize large datasets.
The system compares two datasets by generating hash trees and only transfers the different parts, reducing bandwidth usage and improving efficiency.

🚀 Features
Efficient data comparison using hashing
Detects changes between datasets
Minimizes data transfer
Fast synchronization process
API-based implementation

🛠️ Technologies Used
Backend: Node.js, Express.js
Database: MongoDB (with Mongoose)
Frontend: HTML, CSS, JavaScript
Visualization: vis-network (for tree structure)
Hashing: Crypto module
Testing: Postman

⚙️ How It Works
Data is divided into smaller blocks.
Each block is hashed using a cryptographic hash function.
Hashes are combined to form a Merkle Tree.
Root hash is compared between systems.
If mismatch occurs:
Only the differing branches are checked
Required data is synchronized

📂 Project Structure
├── backend/
├── frontend/
├── models/
├── routes/
├── controllers/
├── utils/
└── README.md

👥 Team Members
Your Name – Ayush AgarwalRoll No: 2315000530
Member 2 Name – Daksh Pandey Roll No: 2315000667
Member 3 Name Devraj Singh– Roll No: 2315000738
Member 4 Name - Ayush Jain Roll No: 2315000543
Member 5 Name - Ayushi Varshney Roll No: 2315000583

💡 Use Cases
Distributed systems
Blockchain technology
File synchronization systems
Data integrity verification

🔮 Future Improvements
Real-time synchronization
Better UI visualization
Support for large-scale distributed systems
Security enhancements

📜 Conclusion
This project demonstrates how Merkle Trees can be used to efficiently synchronize data by transferring only the required differences instead of the entire dataset, saving time and resources.
