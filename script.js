/* ---------- Demo data: Total 23 Courses with complete structures ---------- */
const SAMPLE_COURSES = [
    // Existing 13 Courses
    { id:'c-js', title:'JavaScript Fundamentals', desc:'Learn core JS, DOM manipulation, ES6+, and asynchronous programming essentials.', level:'Beginner', duration:'6 weeks', icon:'JS', iconClass:'icon-js', quiz:[
      {q:'Which keyword declares a block-scoped variable?', a:['var','let','function'], correct:1},
      {q:'How to select element with id="app"?', a:['document.getElementById("app")','document.querySelector(".app")','document.getById(".app")'], correct:0},
      {q:'What does Promise.all() return when?', a:['The first promise resolves','All promises settle','The first promise rejects'], correct:1}
    ], materials: [
      {chapter: 'Introduction', topics: ['What is JavaScript?', 'Setting up the environment']},
      {chapter: 'Core Syntax', topics: ['Variables (var, let, const)', 'Data Types', 'Operators & Loops']},
      {chapter: 'DOM Manipulation', topics: ['Selecting Elements', 'Changing Content', 'Handling Events']},
      {chapter: 'ES6+ Features', topics: ['Arrow Functions', 'Template Literals', 'Destructuring']},
      {chapter: 'Asynchronous JS', topics: ['Callbacks', 'Promises', 'Async/Await (Demo)']}
    ]},
    { id:'c-react', title:'React Basics & Hooks', desc:'Master functional components, state management using Hooks (useState, useEffect), and JSX syntax.', level:'Intermediate', duration:'8 weeks', icon:'⚛️', iconClass:'icon-react', quiz:[
      {q:'Which hook manages state in functional components?', a:['useEffect','useState','useContext'], correct:1},
      {q:'A JSX expression must return only a single root element.', a:['True','False','Only in older React versions'], correct:0},
      {q:'The `key` prop is crucial for optimizing...', a:['Styling in CSS','List rendering performance','Form validation'], correct:1}
    ], materials: [
      {chapter: 'The React Ecosystem', topics: ['Why React?', 'CRA/Vite Setup', 'JSX Fundamentals']},
      {chapter: 'Components & Props', topics: ['Functional Components', 'Passing Data with Props']},
      {chapter: 'State & Lifecycle', topics: ['useState Hook', 'useEffect Hook (Cleanup)', 'Conditional Rendering']},
      {chapter: 'Forms & Routing', topics: ['Controlled Components', 'React Router Basics']}
    ]},
    { id:'c-ds', title:'Data Structures & Algorithms (DSA)', desc:'Deep dive into Arrays, Linked Lists, Trees, Graphs, and analyzing time complexity with Big-O notation.', level:'Advanced', duration:'10 weeks', icon:'🧠', iconClass:'icon-ds', quiz:[
      {q:'What is the time complexity of binary search?', a:['O(n)','O(log n)','O(n log n)'], correct:1},
      {q:'A Stack data structure follows which principle?', a:['FIFO (First In, First Out)','LIFO (Last In, First Out)','Random Access'], correct:1},
      {q:'Which algorithm finds the shortest path in a graph with non-negative edge weights?', a:['DFS','Dijkstra\'s Algorithm','Prim\'s Algorithm'], correct:1}
    ], materials: [
      {chapter: 'Analysis', topics: ['Big-O Notation', 'Time/Space Complexity Examples']},
      {chapter: 'Linear DS', topics: ['Arrays, Stacks, Queues (Implementation)', 'Linked Lists (Singly/Doubly)']},
      {chapter: 'Non-Linear DS', topics: ['Trees (Binary, BST)', 'Graphs (Adjacency List/Matrix)']},
      {chapter: 'Algorithms', topics: ['Sorting (Merge, Quick)', 'Searching (Binary)', 'Graph Traversal (DFS/BFS)']}
    ]},
    { id:'c-py', title:'Python for Data Science', desc:'Introduction to Python, Pandas, NumPy, and Matplotlib for data manipulation and visualization.', level:'Beginner', duration:'7 weeks', icon:'🐍', iconClass:'icon-py', quiz:[{q:'Which Python library is primarily used for data manipulation?', a:['NumPy','Pandas','SciPy'], correct:1},{q:'What does a Series represent in Pandas?', a:['A 2D array','A 1D labeled array','A Dictionary'], correct:1},{q:'What is the purpose of Matplotlib?', a:['Machine Learning','Web Development','Plotting charts'], correct:2}], materials: [
      {chapter: 'Python Basics', topics: ['Syntax, Variables, Functions', 'List Comprehensions']},
      {chapter: 'NumPy', topics: ['Arrays vs. Lists', 'Vectorized Operations']},
      {chapter: 'Pandas', topics: ['DataFrames, Series', 'Reading Data (CSV)', 'Cleaning & Filtering']},
      {chapter: 'Visualization', topics: ['Matplotlib Basics', 'Seaborn for advanced plots']}
    ]},
    { id:'c-node', title:'Node.js & Express API', desc:'Build scalable RESTful APIs using Node.js, Express framework, and MongoDB (or Mongoose ORM).', level:'Intermediate', duration:'9 weeks', icon:'⬢', iconClass:'icon-node', quiz:[{q:'Node.js uses which engine to execute JavaScript?', a:['SpiderMonkey','V8','Chakra'], correct:1},{q:'What is the role of middleware in Express?', a:['Handling database operations','Accessing environment variables','Functions that execute during request lifecycle'], correct:2},{q:'Which module is used for file system operations in Node.js?', a:['http','fs','path'], correct:1}], materials: [
      {chapter: 'Node Fundamentals', topics: ['The V8 Engine', 'Event Loop', 'Modules (CommonJS)']},
      {chapter: 'Express Setup', topics: ['Routing', 'Middleware (e.g., body-parser)']},
      {chapter: 'Database', topics: ['MongoDB vs SQL', 'Mongoose Schemas']},
      {chapter: 'REST APIs', topics: ['CRUD Operations', 'Error Handling']}
    ]},
    { id:'c-next', title:'Next.js Fullstack', desc:'Server-side rendering, routing, API routes, and deployment of modern Next.js applications.', level:'Advanced', duration:'12 weeks', icon:'⚡', iconClass:'icon-next', quiz:[{q:'What is the default rendering method in Next.js 13+?', a:['Client-Side Rendering','Server Components (SSR/SSG mix)','Static HTML'], correct:1},{q:'Which directory is used for defining API routes in Next.js?', a:['/pages/api','/app/api','/server'], correct:1},{q:'What is Hydration in React/Next.js?', a:['Fetching initial data','Mixing HTML/CSS','Attaching event listeners to server-rendered markup'], correct:2}], materials: [
      {chapter: 'App Router', topics: ['Layouts, Pages, Templates', 'Nested Routing']},
      {chapter: 'Rendering Strategies', topics: ['Server Components', 'Client Components', 'Data Fetching']},
      {chapter: 'API & Forms', topics: ['Route Handlers', 'Server Actions']},
      {chapter: 'Deployment', topics: ['Vercel Integration', 'Performance Optimization']}
    ]},
    { id:'c-aws', title:'AWS Cloud Practitioner', desc:'Fundamentals of AWS architecture, security, core services (EC2, S3, RDS), and pricing models.', level:'Beginner', duration:'5 weeks', icon:'☁️', iconClass:'icon-aws', quiz:[{q:'Which service provides compute capacity in the cloud?', a:['S3','EC2','Lambda'], correct:1},{q:'What is Amazon S3 primarily used for?', a:['Relational database','Object storage','Virtual machine hosting'], correct:1},{q:'What is the concept of "Availability Zones"?', a:['A region of the world','Isolated locations within a region','A data center'], correct:1}], materials: [
      {chapter: 'Cloud Concepts', topics: ['Benefits of Cloud', 'Global Infrastructure (Regions, AZs)']},
      {chapter: 'Compute Services', topics: ['EC2 (Virtual Servers)', 'Lambda (Serverless Compute)']},
      {chapter: 'Storage Services', topics: ['S3 (Object Storage)', 'EBS (Block Storage)']},
      {chapter: 'Networking/Security', topics: ['VPC Basics', 'Shared Responsibility Model']}
    ]},
    { id:'c-devops', title:'DevOps with Docker & Kubernetes', desc:'Containerization with Docker, orchestration with Kubernetes, CI/CD pipelines, and monitoring tools.', level:'Intermediate', duration:'10 weeks', icon:'🐳', iconClass:'icon-devops', quiz:[{q:'What is a Dockerfile?', a:['A configuration file for Kubernetes','A script to build a Docker image','A container runtime'], correct:1},{q:'What is the primary function of a Kubernetes Pod?', a:['Managing network traffic','A single instance of a container','The smallest deployable unit'], correct:2},{q:'CI/CD stands for?', a:['Code Integration/Code Deployment','Continuous Integration/Continuous Delivery','Client Interface/Cloud Deployment'], correct:1}], materials: [
      {chapter: 'Docker', topics: ['Containers vs. VMs', 'Dockerfile Writing', 'Docker Compose']},
      {chapter: 'Kubernetes (K8s) Basics', topics: ['Pods, Nodes, Clusters', 'Deployments']},
      {chapter: 'CI/CD Pipelines', topics: ['Jenkins/GitLab Runners', 'Automated Testing']},
      {chapter: 'Monitoring', topics: ['Prometheus & Grafana (Overview)']}
    ]},
    { id:'c-cyber', title:'Cyber Security Fundamentals', desc:'Network security, cryptography basics, ethical hacking concepts, and common web vulnerabilities (XSS, SQLi).', level:'Beginner', duration:'6 weeks', icon:'🔒', iconClass:'icon-cyber', quiz:[{q:'What is the goal of a Denial of Service (DoS) attack?', a:['Stealing data','Making a service unavailable','Encrypting files'], correct:1},{q:'Which type of attack exploits trust in a client-side web application?', a:['SQL Injection','Cross-Site Scripting (XSS)','Phishing'], correct:1},{q:'What is a strong encryption algorithm?', a:['MD5','AES','ROT13'], correct:1}], materials: [
      {chapter: 'Threat Landscape', topics: ['Malware Types', 'Social Engineering']},
      {chapter: 'Web Security', topics: ['XSS Prevention', 'SQL Injection Mitigation']},
      {chapter: 'Cryptography', topics: ['Hashing vs. Encryption', 'PKI Basics']},
      {chapter: 'Network Security', topics: ['Firewalls', 'VPNs']}
    ]},
    { id:'c-go', title:'Golang Programming', desc:'Learn Go\'s concurrency model, goroutines, channels, and building high-performance applications.', level:'Intermediate', duration:'8 weeks', icon:'Go', iconClass:'icon-go', quiz:[{q:'What is a goroutine?', a:['A parallel process','A lightweight thread managed by the Go runtime','A Go data structure'], correct:1},{q:'What is the purpose of a channel in Go?', a:['File I/O','Communication between goroutines','Network socket'], correct:1},{q:'The `:=` operator in Go is used for...', a:['Assignment only','Short variable declaration','Comparison'], correct:1}], materials: [
      {chapter: 'Go Fundamentals', topics: ['Workspace & Packages', 'Variables & Types', 'Control Flow']},
      {chapter: 'Structs & Interfaces', topics: ['Methods', 'Interface Implementation']},
      {chapter: 'Concurrency', topics: ['Goroutines', 'Channels (Unbuffered/Buffered)']},
      {chapter: 'Web Dev in Go', topics: ['Net/http package', 'JSON Handling']}
    ]},
    { id:'c-tailwind', title:'Tailwind CSS Mastery', desc:'Utility-first CSS framework, responsive design, custom configurations, and modern component building.', level:'Beginner', duration:'4 weeks', icon:'CSS', iconClass:'icon-tailwind', quiz:[{q:'Tailwind CSS is a...', a:['Pre-processor','Utility-first CSS framework','JavaScript library'], correct:1},{q:'How do you make an element take full width in Tailwind?', a:['w-full','width-100','max-w-screen'], correct:0},{q:'To apply a style only on hover, you use the prefix:', a:['@hover','on:hover','hover:'], correct:2}], materials: [
      {chapter: 'Introduction', topics: ['Utility-First Concept', 'Setup via CDN/NPM']},
      {chapter: 'Core Utilities', topics: ['Spacing, Typography, Colors', 'Flexbox & Grid']},
      {chapter: 'Responsive Design', topics: ['Breakpoints (sm, md, lg)', 'Mobile-First Workflow']},
      {chapter: 'Customization', topics: ['Configuration File', 'Plugins']}
    ]},
    { id:'c-sql', title:'Advanced SQL & Database Design', desc:'Complex joins, stored procedures, indexing, query optimization, and relational database design principles.', level:'Advanced', duration:'7 weeks', icon:'DB', iconClass:'icon-sql', quiz:[{q:'Which type of join returns only matching rows from both tables?', a:['LEFT JOIN','INNER JOIN','FULL JOIN'], correct:1},{q:'What is the primary benefit of adding an index to a table column?', a:['Faster data insertion','Faster data retrieval','Smaller database size'], correct:1},{q:'ACID properties ensure transaction...', a:['Simplicity','Reliability','Speed'], correct:1}], materials: [
      {chapter: 'Relational Design', topics: ['Normalization (1NF, 2NF, 3NF)', 'Primary/Foreign Keys']},
      {chapter: 'Advanced Queries', topics: ['Subqueries', 'Window Functions']},
      {chapter: 'Joins Deep Dive', topics: ['INNER, LEFT, RIGHT, FULL Joins', 'Self Joins']},
      {chapter: 'Performance', topics: ['Indexing Strategies', 'Query Execution Plan']}
    ]},
    { id:'c-ai', title:'Introduction to Machine Learning', desc:'Concepts of supervised/unsupervised learning, basic models (linear regression, decision trees), and Python libraries (Scikit-learn).', level:'Intermediate', duration:'9 weeks', icon:'🤖', iconClass:'icon-ai', quiz:[{q:'What is the goal of supervised learning?', a:['Discovering hidden patterns','Predicting an output based on labeled input data','Clustering unlabeled data'], correct:1},{q:'Which algorithm is typically used for classification?', a:['Linear Regression','K-Nearest Neighbors','K-Means Clustering'], correct:1},{q:'What does the term "Overfitting" mean?', a:['Model is too simple','Model performs poorly on training data','Model memorizes training data and performs poorly on new data'], correct:2}], materials: [
      {chapter: 'ML Fundamentals', topics: ['Supervised vs. Unsupervised', 'Bias-Variance Tradeoff']},
      {chapter: 'Regression', topics: ['Linear Regression', 'Evaluation Metrics (MSE)']},
      {chapter: 'Classification', topics: ['Logistic Regression', 'Decision Trees', 'Confusion Matrix']},
      {chapter: 'Tooling', topics: ['Scikit-learn API', 'Data Preprocessing']}
    ]},
    { id:'c-ts', title:'TypeScript Deep Dive', desc:'Static typing, interfaces, generics, advanced types, and integrating TypeScript into React/Node projects.', level:'Intermediate', duration:'6 weeks', icon:'TS', iconClass:'icon-ts', quiz:[{q:'What is the main advantage of using TypeScript over JavaScript?', a:['Better performance','Static type checking','Smaller file size'], correct:1},{q:'In TypeScript, an `interface` is used to define...', a:['A class constructor','A contract for an object\'s shape','A component\'s props'], correct:1},{q:'The `any` type should generally be...', a:['Used everywhere','Avoided','Used only for database calls'], correct:1}], materials: [
      {chapter: 'Getting Started', topics: ['Compiler Setup', 'Basic Types (string, number, boolean)']},
      {chapter: 'Object Types', topics: ['Interfaces', 'Type Aliases', 'Optional Properties']},
      {chapter: 'Advanced Typing', topics: ['Generics', 'Utility Types (Partial, Readonly)']},
      {chapter: 'Integration', topics: ['TS with React (Props)', 'TS with Node/Express']}
    ]},
    
    // 10 New Courses added in similar manner
    { id:'c-java', title:'Java Mastery: Core & OOPS', desc:'Master Object-Oriented Programming (OOPS) in Java, collections, exception handling, and streams.', level:'Intermediate', duration:'10 weeks', icon:'☕', iconClass:'icon-java', quiz:[{q:'Which concept refers to binding data and methods together?', a:['Inheritance','Polymorphism','Encapsulation'], correct:2},{q:'A finally block is executed when?', a:['If no exception occurs','If an exception occurs','Always'], correct:2},{q:'Java is platform-independent because of?', a:['JVM','Compiler','Garbage Collector'], correct:0}], materials: [
      {chapter: 'Core Syntax', topics: ['Primitives, Operators, Control Flow', 'Classes and Objects']},
      {chapter: 'OOPS Concepts', topics: ['Encapsulation, Inheritance, Abstraction, Polymorphism']},
      {chapter: 'Advanced Java', topics: ['Collections Framework', 'Exception Handling', 'IO Streams']},
      {chapter: 'Concurrency', topics: ['Threads and Runnable Interface', 'Synchronization']}
    ]},
    { id:'c-spring', title:'Spring Boot Essentials', desc:'Build production-ready, stand-alone Spring applications using REST Controllers, JPA, and Spring Security.', level:'Intermediate', duration:'8 weeks', icon:'🌱', iconClass:'icon-spring', quiz:[{q:'What is the core component of Spring?', a:['ViewResolver','DispatcherServlet','IoC Container'], correct:2},{q:'Which annotation defines a RESTful service endpoint?', a:['@Service','@Repository','@RestController'], correct:2},{q:'Spring Boot eliminates the need for complex?', a:['Java code','XML configuration','Database access'], correct:1}], materials: [
      {chapter: 'Setup & IoC', topics: ['Spring Initializr', 'Inversion of Control (IoC)', 'Dependency Injection (DI)']},
      {chapter: 'Web Development', topics: ['REST Controllers', 'Request Mapping', 'Data Transfer Objects (DTOs)']},
      {chapter: 'Data Persistence', topics: ['Spring Data JPA', 'Entity Mapping', 'Database Configuration']},
      {chapter: 'Security & Testing', topics: ['Spring Security Basics', 'Unit and Integration Testing']}
    ]},
    { id:'c-micro', title:'Microservices Architecture', desc:'Learn the principles of building distributed systems, service communication, discovery, and resilience.', level:'Advanced', duration:'12 weeks', icon:'⚙️', iconClass:'icon-micro', quiz:[{q:'Which pattern handles communication between services?', a:['Monolith','API Gateway','Load Balancer'], correct:1},{q:'Service discovery is used to locate?', a:['Databases','External APIs','Other microservices'], correct:2},{q:'The Saga pattern is used for managing?', a:['Distributed transactions','Logging','Containerization'], correct:0}], materials: [
      {chapter: 'Introduction', topics: ['Monolith vs. Microservices', 'Decomposition Strategies', 'Bounded Contexts']},
      {chapter: 'Communication', topics: ['REST vs. gRPC', 'Asynchronous Messaging (Kafka/RabbitMQ)']},
      {chapter: 'Key Patterns', topics: ['API Gateway', 'Service Discovery (Eureka/Consul)', 'Circuit Breaker']},
      {chapter: 'Deployment', topics: ['Containerization Review (Docker)', 'Orchestration (Kubernetes Intro)']}
    ]},
    { id:'c-git', title:'Git & GitHub Version Control', desc:'Master branch management, merging, resolving conflicts, and collaborating effectively using Git workflows.', level:'Beginner', duration:'3 weeks', icon:'🐙', iconClass:'icon-git', quiz:[{q:'What command checks the status of your working directory?', a:['git commit','git branch','git status'], correct:2},{q:'What is the primary function of `git pull`?', a:['Upload changes to remote','Download and merge remote changes','Create a new branch'], correct:1},{q:'What command is used to record changes to the repository?', a:['git push','git add','git commit'], correct:2}], materials: [
      {chapter: 'Setup', topics: ['Installation', 'Initial Configuration', 'Basic Workflow (add, commit)']},
      {chapter: 'Branching', topics: ['Creating/Switching Branches', 'Merging and Rebasing']},
      {chapter: 'Remote Operations', topics: ['Cloning', 'Pushing and Pulling', 'Handling Remote Repositories']},
      {chapter: 'Advanced', topics: ['Conflict Resolution', 'Undoing Changes (revert, reset)', 'Forking and Pull Requests']}
    ]},
    { id:'c-mongo', title:'MongoDB Fundamentals', desc:'Learn to work with NoSQL documents, perform CRUD operations, indexing, and aggregation framework in MongoDB.', level:'Intermediate', duration:'5 weeks', icon:'🍃', iconClass:'icon-mongo', quiz:[{q:'MongoDB stores data in BSON, which is similar to?', a:['SQL Tables','JSON documents','XML files'], correct:1},{q:'Which command is used to insert a document?', a:['db.collection.create()','db.collection.insert()','db.collection.add()'], correct:1},{q:'What is the purpose of the Aggregation Framework?', a:['Schema enforcement','Data transformation and analysis','Indexing'], correct:1}], materials: [
      {chapter: 'NoSQL Concepts', topics: ['Document Data Model vs Relational', 'MongoDB Shell Basics']},
      {chapter: 'CRUD Operations', topics: ['Insert (one, many)', 'Find (queries, projections)', 'Update and Delete']},
      {chapter: 'Indexing', topics: ['Creating Indexes', 'Performance Optimization']},
      {chapter: 'Advanced Topics', topics: ['Aggregation Pipelines', 'Data Modeling Decisions']}
    ]},
    { id:'c-sqldb', title:'SQL Essentials (MySQL/PostgreSQL)', desc:'Master standard SQL commands, joins, subqueries, data integrity, and basic database interaction.', level:'Beginner', duration:'6 weeks', icon:'💾', iconClass:'icon-sqldb', quiz:[{q:'Which constraint ensures that all values in a column are different?', a:['NOT NULL','PRIMARY KEY','UNIQUE'], correct:2},{q:'The `WHERE` clause is used to filter records in a query.', a:['True','False','Only in UPDATE statements'], correct:0},{q:'Which SQL command retrieves data from a database?', a:['UPDATE','SELECT','INSERT'], correct:1}], materials: [
      {chapter: 'Database Concepts', topics: ['RDBMS Overview', 'Data Types', 'DDL vs DML']},
      {chapter: 'Retrieval', topics: ['SELECT, FROM, WHERE, ORDER BY', 'Filtering (AND, OR, LIKE)']},
      {chapter: 'Manipulation', topics: ['INSERT, UPDATE, DELETE', 'Transactions and Commit']},
      {chapter: 'Joins', topics: ['INNER JOIN', 'LEFT JOIN', 'Grouping Data (GROUP BY)']}
    ]},
    { id:'c-apti', title:'Aptitude for Placements', desc:'Systematic training in Quantitative Aptitude, Logical Reasoning, and Data Interpretation essential for competitive exams.', level:'Beginner', duration:'8 weeks', icon:'➕', iconClass:'icon-apti', quiz:[{q:'If a man runs at 10 km/h, what is his speed in m/s?', a:['2.77 m/s','5 m/s','10 m/s'], correct:0},{q:'Find the odd one out: Car, Bus, Train, Wheel.', a:['Car','Train','Wheel'], correct:2},{q:'What percentage of 40 is 8?', a:['10%','20%','25%'], correct:1}], materials: [
      {chapter: 'Quantitative Skills', topics: ['Time & Work, Speed, Distance', 'Profit & Loss, Percentages', 'Simple & Compound Interest']},
      {chapter: 'Logical Reasoning', topics: ['Blood Relations', 'Coding-Decoding', 'Series Completion']},
      {chapter: 'Data Interpretation', topics: ['Bar Graphs', 'Pie Charts', 'Tabular Data Analysis']},
      {chapter: 'Practice', topics: ['Mock Tests', 'Time Management Strategies']}
    ]},
    { id:'c-eng', title:'Professional English & Communication', desc:'Improve corporate communication, email writing, presentation skills, and vocabulary for professional success.', level:'Beginner', duration:'5 weeks', icon:'🗣️', iconClass:'icon-eng', quiz:[{q:'Which phrase is used to end a formal email?', a:['See ya','Best regards','Talk to you later'], correct:1},{q:'What is the correct use of "affect" vs. "effect"?', a:['Affect is a noun','Effect is usually a verb','Affect is usually a verb'], correct:2},{q:'What is a concise way to say "at this moment in time"?', a:['Currently','Right now','Instantaneously'], correct:0}], materials: [
      {chapter: 'Verbal Skills', topics: ['Vocabulary Building', 'Grammar Correction (Common Errors)']},
      {chapter: 'Writing Skills', topics: ['Formal vs. Informal Tone', 'Email Etiquette', 'Report Writing Basics']},
      {chapter: 'Interview Skills', topics: ['Self-Introduction', 'Answering HR Questions']},
      {chapter: 'Presentation Skills', topics: ['Structuring Content', 'Body Language', 'Handling Q&A']}
    ]},
    { id:'c-linux', title:'Linux Command Line Basics', desc:'Introduction to the Linux environment, file system navigation, essential commands, and basic scripting.', level:'Beginner', duration:'4 weeks', icon:'🐧', iconClass:'icon-linux', quiz:[{q:'Which command is used to list files in a directory?', a:['ls','dir','list'], correct:0},{q:'What does `mkdir` stand for?', a:['Move directory','Make disk','Make directory'], correct:2},{q:'What is the command to view the contents of a file?', a:['read','cat','show'], correct:1}], materials: [
      {chapter: 'Installation & Setup', topics: ['Virtual Machine Setup', 'Terminal Interface']},
      {chapter: 'File System', topics: ['Navigation (cd, pwd)', 'File Management (cp, mv, rm)']},
      {chapter: 'User & Permissions', topics: ['User Management', 'chmod/chown explained']},
      {chapter: 'Basic Scripting', topics: ['Variables', 'Simple Shell Scripts (if/else)']}
    ]},
    { id:'c-cloudsec', title:'Cloud Security Fundamentals (Azure AZ-500)', desc:'Focuses on security operations, identity and access management, and platform protection in the cloud environment.', level:'Advanced', duration:'7 weeks', icon:'🛡️', iconClass:'icon-cloudsec', quiz:[{q:'What is a primary tool for securing virtual networks in Azure?', a:['Resource Groups','Network Security Groups (NSG)','Azure Monitor'], correct:1},{q:'Azure AD is used primarily for?', a:['File storage','Identity and Access Management','Virtual machine deployment'], correct:1},{q:'What does MFA stand for?', a:['Multi-Factor Authentication','Managed File Access','Microsoft Functional Access'], correct:0}], materials: [
      {chapter: 'Identity & Access', topics: ['Azure AD, Users and Groups', 'Role-Based Access Control (RBAC)']},
      {chapter: 'Platform Protection', topics: ['Network Security Groups (NSG)', 'Azure Firewall']},
      {chapter: 'Security Operations', topics: ['Azure Sentinel (Overview)', 'Security Center']},
      {chapter: 'Data Security', topics: ['Encryption at Rest/Transit', 'Key Vault']}
    ]},
  ];

  /* ---------- Utilities: localStorage keys ---------- */
  // Version update to V4 to prevent mixing with old storage data
  const LS_USERS = 'elearn_users_v4';
  const LS_SESSION = 'elearn_session_v4';
  const LS_ENROLL = 'elearn_enroll_v4';
  const LS_SCORES = 'elearn_scores_v4';

  /* ---------- Simple localStorage helpers ---------- */
  const load = (k)=> JSON.parse(localStorage.getItem(k) || 'null');
  const save = (k,v)=> localStorage.setItem(k, JSON.stringify(v));

  /* Initialize sample data if first time */
  if(!load(LS_USERS)){
    save(LS_USERS, [{id:'u-admin',name:'Guest',email:'guest@demo',pass:'demo123'}]);
  }
  // Update courses list
  save('elearn_courses', SAMPLE_COURSES);

  /* ---------- DOM Elements and Helpers ---------- */
  const coursesListEl = document.getElementById('coursesList');
  const myCoursesEl = document.getElementById('myCourses');
  const authModal = document.getElementById('authModal');
  const courseModal = document.getElementById('courseModal');
  const courseContent = document.getElementById('courseContent');
  const welcomeText = document.getElementById('welcomeText');
  const openLogin = document.getElementById('openLogin');
  const signOutBtn = document.getElementById('signOutBtn');

  function renderCourses(){
    const courses = load('elearn_courses') || [];
    coursesListEl.innerHTML = '';
    courses.forEach(c=>{
      const el = document.createElement('div'); el.className='course';
      el.innerHTML = `
          <div class="course-header">
              <div class="course-icon ${c.iconClass}">${c.icon}</div>
              <h3 style="margin:0">${c.title}</h3>
          </div>
          <p>${c.desc}</p>
          <div class="meta">
              <small class="small">${c.level} · ${c.duration}</small>
              <div><button class="btn" data-id="${c.id}">View</button></div>
          </div>`;
      coursesListEl.appendChild(el);
    });
    // attach handlers
    coursesListEl.querySelectorAll('button').forEach(btn=>btn.addEventListener('click',()=>openCourse(btn.dataset.id)));
  }

  function renderMyCourses(){
    const session = load(LS_SESSION);
    myCoursesEl.innerHTML='';
    if(!session){ myCoursesEl.innerHTML='<div class="small">Sign in to see your courses</div>'; return }
    const enroll = load(LS_ENROLL) || {};
    const scores = load(LS_SCORES) || {};
    const my = enroll[session.id] || [];
    if(my.length===0){ myCoursesEl.innerHTML='<div class="small">You have not enrolled in any course yet.</div>'; return }
    const courses = load('elearn_courses');

    my.forEach(cid=>{
      const c = courses.find(x=>x.id===cid);
      if(!c) return; 
      const s = scores[session.id] && scores[session.id][cid] ? scores[session.id][cid] : {score:0,total:c.quiz.length,complete:false};
      const progressPercent = s.total ? Math.round((s.score/s.total)*100) : 0;

      const div = document.createElement('div'); div.className='my-course';
      div.innerHTML = `<div class="my-course-info">
          <div><div class="course-icon ${c.iconClass}">${c.icon}</div>${c.title}</div>
          <div class="small">${c.level} · ${c.duration}</div>
          <div style="height:8px"></div>
          <div class="progress"><i style="width:${progressPercent}%"></i></div>
          <div class="small" style="margin-top:6px;display:flex;justify-content:space-between"><span>Progress: ${progressPercent}%</span><span style="font-weight:600;color:${progressPercent>=70 ? 'var(--success)' : progressPercent>0 ? 'var(--accent)' : 'var(--muted)'}">${progressPercent>=70 ? 'High Achiever' : progressPercent>0 ? 'In Progress' : 'Not Started'}</span></div>
      </div>
      <div style="display:flex;flex-direction:column;gap:8px"><button class="btn" data-id="${c.id}" data-action="open">Open</button><button style="background:#f3f7fb;color:var(--accent);border:none;padding:8px;border-radius:8px;font-weight:600" data-id="${c.id}" data-action="quiz">Take Quiz</button></div>`;
      myCoursesEl.appendChild(div);
    });
    myCoursesEl.querySelectorAll('button').forEach(b=>{ b.addEventListener('click',(e)=>{
      const id=b.dataset.id; const act=b.dataset.action;
      if(act==='open') openCourse(id); else if(act==='quiz') openCourse(id,true);
    }) });
  }

  /* ---------- Auth flow (simple demo) ---------- */
  let currentAuthMode = 'login';
  function showMessage(type, message, elementId) {
    const msgEl = document.getElementById(elementId);
    msgEl.className = `form-message ${type} form-active`;
    msgEl.textContent = message;
    setTimeout(() => msgEl.classList.remove('form-active'), 5000);
  }
  
  function openAuth(mode='login'){
    authModal.style.display='flex';
    currentAuthMode = mode;
    document.getElementById('loginForm').style.display = mode === 'login' ? 'block' : 'none';
    document.getElementById('signupForm').style.display = mode === 'signup' ? 'block' : 'none';
    document.querySelectorAll('.tab').forEach(t=>t.classList.toggle('active', t.dataset.mode===mode));
  }
  function closeAuth(){ authModal.style.display='none' }

  // Login logic
  document.getElementById('l_submit').addEventListener('click', () => {
    const email = document.getElementById('l_email').value.trim();
    const pass = document.getElementById('l_pass').value.trim();
    if (!email || !pass) { showMessage('error', 'Please enter email and password.', 'loginMsg'); return; }
    const users = load(LS_USERS) || [];
    const u = users.find(u => u.email === email && u.pass === pass);
    if (!u) { showMessage('error', 'Invalid credentials or account does not exist.', 'loginMsg'); return; }
    save(LS_SESSION, { id: u.id, name: u.name || u.email.split('@')[0], email: u.email });
    closeAuth();
    updateUI();
    showMessage('success', `Welcome back, ${u.name}!`, 'loginMsg');
  });

  // Signup logic
  document.getElementById('s_submit').addEventListener('click', () => {
    const email = document.getElementById('s_email').value.trim();
    const pass = document.getElementById('s_pass').value.trim();
    const name = document.getElementById('s_name').value.trim();

    if (!name || !email || !pass) { showMessage('error', 'All fields are required.', 'signupMsg'); return; }
    if (pass.length < 6) { showMessage('error', 'Password must be at least 6 characters.', 'signupMsg'); return; }

    const users = load(LS_USERS) || [];
    if (users.find(u => u.email === email)) { showMessage('error', 'Account with this email already exists. Try logging in.', 'signupMsg'); return; }

    const id = 'u-' + Date.now();
    const newUser = { id, name, email, pass };
    users.push(newUser);
    save(LS_USERS, users);
    save(LS_SESSION, { id: newUser.id, name: newUser.name, email: newUser.email });
    closeAuth();
    updateUI();
    alert(`Account created successfully! Welcome, ${newUser.name}.`); 
  });

  // switch tabs
  document.querySelectorAll('.tab').forEach(t=>t.addEventListener('click',()=>openAuth(t.dataset.mode)));
  openLogin.addEventListener('click',()=>openAuth('login'));
  authModal.addEventListener('click', (e)=>{ if(e.target===authModal) closeAuth() });

  function signOut(){ localStorage.removeItem(LS_SESSION); updateUI(); }
  signOutBtn.addEventListener('click', signOut);

  /* ---------- Course modal (view / enroll / quiz) ---------- */
  function openCourse(id, openQuiz=false){
    const courses = load('elearn_courses');
    const c = courses.find(x=>x.id===id);
    if(!c) return;
    courseContent.innerHTML = '';
    const session = load(LS_SESSION);

    const enroll = load(LS_ENROLL) || {};
    const my = session ? (enroll[session.id]||[]) : [];
    const enrolled = my.includes(id);

    const html = document.createElement('div');
    html.innerHTML = `<h2 style="margin-top:0;color:var(--accent)">${c.title}</h2>
      <p class="small" style="font-size:14px;color:#374151;font-weight:500">${c.level} · ${c.duration}</p>
      <p style="font-size:16px">${c.desc}</p>
      <div style="display:flex;gap:10px;margin-top:16px">
        <button class="btn enrollBtn" style="${enrolled? 'background:#eef4fb;color:var(--accent);cursor:default;' : 'background:var(--success);color:white;'}">${enrolled? '✅ Enrolled' : 'Enroll Now'}</button>
        <button style="background:#f3f7fb;color:#374151;border:none;padding:8px 12px;border-radius:10px;font-weight:600" class="outlineBtn">Close View</button>
      </div>
      <hr style="margin:20px 0;border:none;border-top:1px solid #e1e7f1">
      <div id="courseExtra"></div>
    `;
    courseContent.appendChild(html);

    courseModal.style.display='flex';

    html.querySelector('.outlineBtn').addEventListener('click',()=>courseModal.style.display='none');
    const enrollBtn = html.querySelector('.enrollBtn');
    enrollBtn.addEventListener('click',()=>{
      if(!session){ alert('Please login to enroll'); return }
      if(enrolled) return;
      const e = load(LS_ENROLL) || {}; e[session.id]= e[session.id]||[]; e[session.id].push(id); save(LS_ENROLL,e); renderMyCourses(); enrollBtn.textContent='✅ Enrolled'; enrollBtn.style.cssText='background:#eef4fb;color:var(--accent);cursor:default;'; alert('Enrolled successfully! Check your My Courses dashboard.');
    });

    // attach extra actions
    const extra = courseContent.querySelector('#courseExtra');
    if(enrolled) {
      extra.innerHTML = `<h3 style="margin-top:0">Learning Actions</h3><div style="display:flex;gap:10px"><button class="btn" id="takeQuizNow" style="background:var(--accent);color:white">Take Quiz</button><button style="background:#fff;border:1px solid #eef3fb;padding:8px 12px;border-radius:10px;font-weight:600" id="viewMaterials">View Materials</button></div>`;
      extra.querySelector('#takeQuizNow').addEventListener('click',()=>renderQuiz(c));
      extra.querySelector('#viewMaterials').addEventListener('click',()=>renderMaterials(c, extra));
      if(openQuiz) renderQuiz(c);
    } else {
      extra.innerHTML = '<p class="small" style="color:var(--error);font-weight:600">You must enroll to access the quiz and materials.</p>';
    }
  }

  function renderMaterials(course, container){
      const materialsSection = document.getElementById('materialsSection');
      if (materialsSection) { 
          materialsSection.remove(); 
          document.querySelector('#viewMaterials').textContent = 'View Materials';
          return; 
      }

      document.querySelector('#viewMaterials').textContent = 'Hide Materials';

      const mat = document.createElement('div'); 
      mat.id = 'materialsSection'; 
      mat.style.marginTop='20px';
      mat.style.background='#fcfdff';
      mat.style.padding='15px';
      mat.style.borderRadius='10px';
      mat.style.border='1px solid #eef3fb';

      let html = '<h4 style="margin-top:0; color:#1f2937">Course Chapters & Topics</h4><ul class="materials-list" style="padding:0">';
      
      course.materials.forEach((m, index) => {
          html += `<li style="background:#f9fbfc">
              <strong>Module ${index + 1}: ${m.chapter}</strong>
          </li>`;
          m.topics.forEach(topic => {
              html += `<li>
                  <span>&bull; ${topic}</span>
                  <span style="color:var(--accent)">[Link/Video]</span>
              </li>`;
          });
      });
      
      html += '</ul>';
      html += '<p class="small" style="margin-top:10px; text-align:center">Completion of all modules is required to finish the course.</p>';
      
      mat.innerHTML = html;
      container.appendChild(mat);
  }


  function renderQuiz(course){
    const session = load(LS_SESSION);
    if(!session){ alert('Please login to take quiz'); return }
    const enroll = load(LS_ENROLL) || {}; const my = enroll[session.id]||[];
    if(!my.includes(course.id)){ alert('Please enroll first'); return }

    let idx=0, score=0, quizActive=true;
    const container = document.getElementById('courseContent');
    
    function showQuestion(){
      if(!quizActive) return;
      const q = course.quiz[idx];
      container.innerHTML = `<h3>Quiz — ${course.title}</h3><p class="small" style="font-weight:600;color:var(--accent)">Question ${idx+1} of ${course.quiz.length}</p>
        <div style="margin-top:15px;background:#fcfdff;padding:15px;border-radius:10px;border:1px solid #eef3fb">
          <div style="font-weight:700;font-size:18px;margin-bottom:10px">${q.q}</div>
          <div class="quiz-options" style="display:flex;flex-direction:column;gap:8px">${q.a.map((opt,i)=>`<button class=\"btn optBtn\" data-i=\"${i}\">${opt}</button>`).join('')}</div>
        </div>
        <div style="margin-top:15px;text-align:right"><button style="background:var(--error);color:white;border:none;padding:8px 12px;border-radius:10px;font-weight:600" id="quitQuiz">Quit Quiz</button></div>`;
      
      const optionButtons = container.querySelectorAll('.optBtn');
      optionButtons.forEach(b=>b.addEventListener('click',()=>{
        if(!quizActive) return;
        const chosen = +b.dataset.i;
        quizActive = false; // Disable further clicks on current question

        // Highlight correct and chosen
        optionButtons.forEach((opt, i) => {
            opt.disabled = true;
            if (i === q.correct) opt.classList.add('correct');
            else if (i === chosen) opt.classList.add('wrong');
        });

        if(chosen===q.correct) score++; 
        
        // Wait a moment before moving to the next question
        setTimeout(() => {
          idx++; 
          quizActive = true;
          if(idx<course.quiz.length) showQuestion(); 
          else finishQuiz();
        }, 1000); // 1 second delay
      }));
      container.querySelector('#quitQuiz').addEventListener('click',()=>{ 
        if(confirm('Quit quiz? Your current progress will not be saved for this attempt.')) {
          quizActive = false;
          courseModal.style.display='none'; 
          openCourse(course.id); // Re-open course details
        }
      });
    }

    function finishQuiz(){
      const total = course.quiz.length; 
      const userscores = load(LS_SCORES) || {};
      userscores[session.id] = userscores[session.id] || {};
      const currentScore = userscores[session.id][course.id] ? userscores[session.id][course.id].score : 0;
      
      // Only save if the new score is better or if no score exists
      if(score > currentScore) {
           userscores[session.id][course.id] = {score, total, complete:true};
           save(LS_SCORES, userscores);
      }
      
      const finalPercent = Math.round((score/total)*100);
      const feedback = finalPercent >= 80 ? 'Excellent! Top marks!' : finalPercent >= 50 ? 'Good job, keep reviewing.' : 'Needs improvement. Go through the materials again.';
      
      container.innerHTML = `<h3 style="color:var(--success)">Quiz Completed! 🎉</h3>
        <p style="font-size:16px">You scored **${score}** out of **${total}** ( **${finalPercent}%** )</p>
        <p style="font-weight:600">${feedback}</p>
        <div style="margin-top:20px;display:flex;gap:10px"><button class="btn" id="closeQ" style="background:var(--accent);color:white">Back to Course</button><button class="btn" id="retakeQ" style="background:#f3f7fb;color:var(--accent)">Retake Quiz</button></div>`;
      
      container.querySelector('#closeQ').addEventListener('click',()=>{ courseModal.style.display='none'; renderMyCourses() });
      container.querySelector('#retakeQ').addEventListener('click',()=>renderQuiz(course));
    }
    showQuestion();
  }

  courseModal.addEventListener('click',(e)=>{ if(e.target===courseModal) courseModal.style.display='none' });

  /* ---------- UI state ---------- */
  function updateUI(){
    const session = load(LS_SESSION);
    if(session){
      welcomeText.textContent = `Hello, ${session.name}`;
      document.getElementById('avatarInitial').textContent = (session.name||'G')[0].toUpperCase();
      document.getElementById('userName').textContent = session.name;
      document.getElementById('userEmail').textContent = session.email;
      openLogin.style.display='none'; signOutBtn.style.display='inline-block';
    } else {
      welcomeText.textContent = 'Welcome, Guest';
      document.getElementById('avatarInitial').textContent = 'G';
      document.getElementById('userName').textContent = 'Guest';
      document.getElementById('userEmail').textContent = 'Not signed in';
      openLogin.style.display='inline-block'; signOutBtn.style.display='none';
    }
    renderMyCourses();
  }

  // initial calls
  renderCourses(); 
  updateUI();

  // small UX: close modals on Esc
  window.addEventListener('keydown', (e)=>{ 
    if(e.key==='Escape'){ 
      authModal.style.display='none'; 
      courseModal.style.display='none';
    } 
  });