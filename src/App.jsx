import React, { useState, useEffect } from 'react';
import { 
  Terminal, Server, Network, Shield, Cpu, Database, 
  Code, Blocks, BrainCircuit, ExternalLink, X, ChevronRight, 
  Map, Fingerprint, Activity, LineChart, MessageSquare, 
  Mail, Video, FileCheck, Layers, GitBranch, Zap, Crosshair, Box, Target, Github
} from 'lucide-react';

// --- DATA DEFINITIONS ---

const EXPERIENCE = [
  {
    id: 1,
    role: "Senior Data Scientist",
    company: "IBM",
    location: "Bangalore",
    period: "Dec 2025 - Present",
    highlights: [
      "Designed and deployed a production-grade Agentic AI system for Lloyd's Banking Group, utilizing LangGraph for multi-step reasoning and explainable spending insights.",
      "Engineered a high-performance MLOps pipeline on GCP (GKE, Vertex AI) with Jenkins CI/CD.",
      "Optimized system latency by 50% through parallel execution and enhanced response accuracy by 40% via custom AI guardrails."
    ]
  },
  {
    id: 2,
    role: "Data Scientist",
    company: "TVS Credit Services",
    location: "Chennai",
    period: "May 2024 - Dec 2025",
    highlights: [
      "Developed a customer support Multi-Agent system using LangGraph, Semantic RAG, and Azure OpenAI to orchestrate state-managed intent classification.",
      "Built an LLM-powered SQL BI Web Application reducing data turnaround time by 70-80% for over 2,000+ monthly queries.",
      "Owned the end-to-end ML pipeline for a large-scale KYC facial recognition system (15M customers) ensuring 0.42s latency.",
      "Developed a sequence predictive Transformer model for Next-Best-Action loan recommendations, achieving 94% accuracy."
    ]
  },
  {
    id: 3,
    role: "Associate Data Scientist",
    company: "Digit Insurance",
    location: "Bangalore",
    period: "June 2021 - May 2024",
    highlights: [
      "Developed an end-to-end Multi-layer Fraud Detection System incorporating image classification, SuperGlue feature matching, and Siamese networks (18% precision boost).",
      "Deployed lightweight Edge Models (Pruning + Quantization), reducing model sizes by 80% and inference latency by 70%.",
      "Created a GenAI Personalized Advertisement Portal (RVC & Wav2Lip) delivering 20,000+ localized videos, boosting sales by 12%.",
      "Built a computer vision fraud detection system leveraging mobile sensor data and object tracking (98% accuracy)."
    ]
  },
  {
    id: 4,
    role: "SWE (Computer Vision) Intern",
    company: "MirrorSize US Inc",
    location: "Noida",
    period: "Oct 2020 - April 2021",
    highlights: [
      "Developed 3D deep learning models for human mesh and pose extraction (SMPL, HMR).",
      "Benchmarked model performance and implemented calibration techniques (DeepCalib) to minimize image distortions."
    ]
  }
];

const SKILLS = {
  "Technical Expertise": [
    "Machine Learning (ML)",
    "Deep Learning (DL)",
    "Generative AI (LLMs, Transformers)",
    "Agentic AI",
    "Computer Vision (CNNs)",
    "NLP",
    "LLM Fine-tuning (LoRA, QLoRA)",
    "Statistical & Predictive Modeling",
    "Model Optimization (Pruning, Quantization)"
],
  "Languages And Databases": [
    "Python",
    "C",
    "C++",
    "SQL",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "VectorDB (FAISS, ChromaDB, Pinecone)"
],  "Frameworks & Libraries": [
    "TensorFlow",
    "PyTorch",
    "Keras",
    "Spacy",
    "NLTK",
    "MxNet",
    "Scikit-Learn",
    "TensorFlow Lite",
    "OpenCV",
    "NumPy",
    "Pandas",
    "Matplotlib",
    "Flask",
    "FastAPI",
    "Dlib",
    "Streamlit",
    "LangChain",
    "LangGraph",
    "HuggingFace",
    "CrewAI"
],
  "Cloud Infrastructure & MLOps": [
    "AWS (SageMaker, EC2, ECS, Lambda, Glue, S3, Kendra)",
    "Azure",
    "GCP",
    "Docker",
    "Jenkins",
    "Bitbucket",
    "Jira",
    "Vercel",
    "Snowflake",
    "Red Hat OpenShift"
]};

// Added placeholder github links to all projects. 
// Replace "#" with your actual repository URLs.
const PROJECTS = [
  {
    id: "autoshield",
    title: "AutoShield AI",
    subtitle: "Multi-Layer Insurance Fraud Detection",
    icon: <Shield className="w-8 h-8 text-[#2563EB] icon-glow" strokeWidth={1.5} />,
    github: "https://github.com/Tanupvats/Multi-Layer-Insurance-Fraud-Detection",
    tags: ["SuperGlue", "Siamese Networks", "YOLOv11", "PyTorch","SAM"],
    images: [
      { src: "Autoshield_AI_Demo.gif", caption: "Left Side vs Right side Demo" },
      { src: "Autoshield_AI_demo_windshield_match.gif", caption: "front Windshield vs LRC Windshield Demo" },
      { src: "Multi_layer_fraud_detection.png", caption: "Multi-Layer System Architecture" },
      { src: "pose_training_and_inference.png", caption: "Pose Detection Model Inference" },
      { src: "yolov11_training-inference.png", caption: "YOLOv11 Part Segmentation" },
      { src: "Siamese_yolov11_training-inference.png", caption: "Siamese Identity Network Matching" }
    ],
    summary: "A sophisticated CV pipeline designed to detect insurance fraud in vehicle claims using Geometric Invariance and Deep Identity Embeddings.",
    details: {
      problem: "Traditional metadata-based fraud detection fails against sophisticated manipulations like image mirroring and 'Double Dipping'.",
      architecture: [
        { step: "Layer 1: Pose Analysis", desc: "EfficientNet-B0 determines 8-class vehicle orientation for precise routing." },
        { step: "Layer 2: Component Segmentation", desc: "YOLOv11 segments wheels, headlights, and windshields." },
        { step: "Layer 3: Geometric Consistency", desc: "SuperGlue (GNN) detects mirrored/inverted background manipulations." },
        { step: "Layer 4: Identity Verification", desc: "Siamese Network extracts windshield fingerprints for vehicle uniqueness check." }
      ]
    }
  },
  {
    id: "hr-agents",
    title: "Agentic HR Platform",
    subtitle: "Multi-Agent Onboarding & Offboarding",
    icon: <Network className="w-8 h-8 text-[#2563EB] icon-glow" strokeWidth={1.5} />,
    github: "https://github.com/Tanupvats/Intelligent-Onboarding-offboarding-multi-agent-system",
    tags: ["LangGraph", "FastAPI", "Llama 3.2", "MCP", "Streamlit"],
    images: [
      { src: "HLSD_Agentic_onboarding_ofboarding_platform.png", caption: "End-to-End HLSD Flow" },
      { src: "Agent_flow_for_onboarding_offboarding.png", caption: "Node Flow of Agents & Tools" },
      { src: "onboarding_demo.gif", caption: "Onboarding Demo" },
      { src: "Offboarding_demo.gif", caption: "Offboarding Demo" },
      { src: "gmail_integration.jpg", caption: "Agentic Email Notification" },
      { src: "HR_platform.jpg", caption: "HR Control Center (HITL)" }
    ],
    summary: "A Hub-and-Spoke Micro-Orchestration architecture automating candidate lifecycle using autonomous LLM reasoning with Human-In-The-Loop.",
    details: {
      problem: "Scattered email chains and manual compliance checks bottleneck HR workflows and expose security risks.",
      architecture: [
        { step: "State-Driven Orchestration", desc: "LangGraph manages asynchronous workflows, pushing to END states to safely await human inputs." },
        { step: "Model Context Protocol (MCP)", desc: "Strict sandboxing. LLMs have no direct disk/network access; side-effects use isolated MCP subprocesses." },
        { step: "Agentic Validation", desc: "Vision LLMs extract and validate government IDs autonomously." },
        { step: "Dynamic Notifications", desc: "Background tasks trigger dynamic, LLM-drafted emails based on state transitions." }
      ]
    }
  },
  {
    id: "sql-bi",
    title: "Self-Service AI Query Webapp",
    subtitle: "Privacy-First SQL Intelligence",
    icon: <Database className="w-8 h-8 text-[#2563EB] icon-glow" strokeWidth={1.5} />,
    github: "https://github.com/Tanupvats/self-service-ai-query-webapp",
    tags: ["LangGraph", "Ollama", "ChromaDB", "React"],
    images: [
      { src: "demo_self_service_query_web_app.gif", caption: "Web App Demo" },
      { src: "system_architectue_self_service_query_webapp.png", caption: "Agentic Architecture" },
      { src: "agent_state_flow_self_service_query_web_app.png", caption: "Agentic State Graph Flow" }
    ],
    summary: "Stateful multi-agent system translating natural language into executable SQL queries against loan portfolios entirely locally.",
    details: {
      problem: "Bank RMs require instant data insights without exposing sensitive financial datasets to cloud LLM providers.",
      architecture: [
        { step: "Ambiguity Analyzer", desc: "Evaluates query against Dynamic Schema Context. Flags UNCLEAR states to prevent hallucination." },
        { step: "Clarification Agent", desc: "Bounded to 2-turns to ask clarifying questions before terminating invalid requests." },
        { step: "RAG Retriever", desc: "Embeds intent to fetch top 'Golden SQL' examples from local ChromaDB." },
        { step: "Execution Engine", desc: "Generates SQLite syntax executed securely in-browser via AlaSQL." }
      ]
    }
  },
  {
    id: "customer-support-agent",
    title: "Banking Support Agent",
    subtitle: "Conversational Banking Support",
    icon: <MessageSquare className="w-8 h-8 text-[#2563EB] icon-glow" strokeWidth={1.5} />,
    github: "https://github.com/Tanupvats/customer-support-agent",
    tags: ["LangGraph", "FastAPI", "Azure/OpenAI", "LangSmith", "LangChain"],
    images: [
      { src: "CSA_demo.gif", caption: "End-to-End Support Agent Demo" },
      { src: "Customer_Support_Agent.jpg", caption: "High Level System Design" },
      { src: "Customer_Support_Agent_graph_work_flow.jpg", caption: "LangGraph Node Execution Flow" }
    ],
    summary: "Production-grade conversational banking support agent with multi-turn conversations, tool-based reasoning, and ticketing.",
    details: {
      problem: "Banking customer service workflows are highly procedural and require safe context-switching to avoid errors and LLM hallucinations.",
      architecture: [
        { step: "Multi-Turn Agent", desc: "Session-based memory to handle context shifts." },
        { step: "LangGraph Orchestration", desc: "Instructor → Agent ↔ Tools → Finalize loop." },
        { step: "Account-Specific Tools", desc: "Dynamic integration for EMI calculation and user lookup." },
        { step: "Observability", desc: "Fully instrumented with LangSmith for tracing tokens, latency, and errors." }
      ]
    }
  },
  {
    id: "peftml",
    title: "peftml Toolkit",
    subtitle: "PyTorch Compression & Fine-Tuning",
    icon: <Blocks className="w-8 h-8 text-[#2563EB] icon-glow" strokeWidth={1.5} />,
    github: "https://github.com/Tanupvats/peftml_v2",
    tags: ["Lora","QLoRA", "Sparse-QAT","Pruning" ,"Quantization","Knowledge Distillation", "PyTorch"],
    images: [
      { src: "peftml_system_architecture.png", caption: "Decoupled Engine Architecture" },
      { src: "Pruning_techniques.png", caption:"Pruning techniques"},
      { src: "Quantization_techniques.png", caption:"Quantization techniques"},
      { src: "Lora_qlora.png", caption:"LLM Fine-Tuning "}
    ],
    summary: "A production-grade model compression library abstracting graph intersections, STEs, and forward hooks for safe edge deployment.",
    details: {
      problem: "Simultaneous pruning and quantization often results in Straight-Through Estimator (STE) gradient collisions and loss divergence.",
      architecture: [
        { step: "LLM Fine-Tuning", desc: "Sub-graph injection of QLoRA adapters with strict mixed-precision routing to prevent NaNs." },
        { step: "Extreme Edge Compression", desc: "Orchestrates Iterative Pruning + Quantization-Aware Training safely." },
        { step: "Dynamic Distillation", desc: "Builds 1x1 Conv adapters dynamically to project cross-architecture tensor dimensions." },
        { step: "Hardware-Agnostic", desc: "Non-destructive graph edits ensuring torch.onnx.export compatibility." }
      ]
    }
  },
  {
    id: "genai-ads",
    title: "GenAI Ad Platform",
    subtitle: "Hyper-Personalized Video Generation",
    icon: <Video className="w-8 h-8 text-[#2563EB] icon-glow" strokeWidth={1.5} />,
    github: "https://github.com/Tanupvats/Generative-AI-Hyper-Personalized-Ad-Platform",
    tags: ["RVC", "Wav2Lip", "FastAPI", "Docker","React"],
    images: [
      { src: "demo_add_platform.gif", caption: "End-to-End Video Ad Generation Demo" },
      { src: "system_architecture_add_platform.png", caption: "Full Pipeline Orchestration" },
      { src: "HLD_RVC.png", caption: "RVC Inference Design" },
      { src: "HLD_LIPSYNC.png", caption: "Lip-Sync Inference Design" }
    ],
    summary: "Decoupled microservices architecture orchestrating Text-to-Speech, Voice Style Transfer, and Video Lip-Syncing for ads at scale.",
    details: {
      problem: "Heavy GPU-bound PyTorch workloads (GANs) block traditional web application event loops.",
      architecture: [
        { step: "Orchestrator API", desc: "Traffic controller mediating between React frontend and backend ML containers." },
        { step: "Voice Conversion Service", desc: "Headless FastAPI backend for Retrieval-based Voice Conversion (RVC)." },
        { step: "Lip-Sync Service", desc: "Preloaded face detection and GAN-based Wav2Lip models in GPU memory for zero cold-start." },
        { step: "Isolation", desc: "Independent Docker containers with nvidia-container-toolkit for dependency safety." }
      ]
    }
  },
  {
    id: "nba-loan",
    title: "NBA Loan Recommendation",
    subtitle: "Next-Best-Action Sequence Modeling",
    icon: <LineChart className="w-8 h-8 text-[#2563EB] icon-glow" strokeWidth={1.5} />,
    github: "https://github.com/Tanupvats/Next-Best-Action-NBA-Loan-Recommendation-Engine",
    tags: ["Transformers", "PyTorch", "AMP", "NetworkX"],
    images: [
      { src: "demo_insight.gif", caption: "Business Intelligence Dashboard Demo" },
      { src: "architecture_of_the_system.png", caption: "System Architecture & Workflow" },
      { src: "training_and_inference.png", caption: "Training and Inference Flow" }
    ],
    summary: "Deep learning pipeline treating customer financial journeys as sequential data using self-attention mechanisms to predict the next product.",
    details: {
      problem: "Traditional recommendation engines treat transactions as isolated events, ignoring long-term temporal dependencies.",
      architecture: [
        { step: "Transformer Encoder", desc: "Custom 4-layer architecture with 8 attention heads fusing categorical and continuous features." },
        { step: "Optimization", desc: "Automatic Mixed Precision (AMP) for 3x faster training on NVIDIA GPUs." },
        { step: "Probabilistic Calibration", desc: "Converts raw logits into confidence scores factoring Expected Revenue vs. Risk (DPD)." },
        { step: "Intelligence Dashboard", desc: "Streamlit UI mapping product affinities via graph analytics (NetworkX)." }
      ]
    }
  },
  {
    id: "body-measurement",
    title: "3D Body Measurement",
    subtitle: "Single Image Parameter Extraction",
    icon: <Activity className="w-8 h-8 text-[#2563EB] icon-glow" strokeWidth={1.5} />,
    github: "https://github.com/Tanupvats/3D-Body-Measurement-from-a-Single-Image",
    tags: ["YOLOv8-seg", "OpenPose", "SMPL", "Streamlit"],
    images: [
      { src: "body_measurement_demo.gif", caption: "3D Body Mesh Estimation Demo" },
      { src: "system_architecture_3d_body_measurement.png", caption: "6-Step Linear Pipeline Design" }
    ],
    summary: "AI-powered tool that estimates full-body 3D shape, pose, and real-world geometric measurements from a single front-facing photograph.",
    details: {
      problem: "Generating accurate 3D metric representations from a singular 2D perspective requires precise segmentation and mathematical scaling.",
      architecture: [
        { step: "2D Human Segmentation", desc: "YOLOv8 Nano-Segmentation model isolates human silhouettes." },
        { step: "2D Pose Estimation", desc: "OpenCV's DNN module runs OpenPose to extract 18 key human joints." },
        { step: "3D Body Reconstruction", desc: "PyTorch optimization loop adjusts SMPL parameters (betas, pose) to align with 2D inputs." },
        { step: "Real-World Scaling", desc: "Uses user height to calculate scale factors, creating a metric-scaled 3D mesh for circumference/linear extraction." }
      ]
    }
  },
  {
    id: "annotator-app",
    title: "AI-Powered Annotator",
    subtitle: "CV Annotation Web App",
    icon: <Code className="w-8 h-8 text-[#2563EB] icon-glow" strokeWidth={1.5} />,
    github: "https://github.com/Tanupvats/AI-Powered-Annotation-Webapp",
    tags: ["React 18", "Streamlit", "OpenCV", "Fabric.js"],
    images: [
      { src: "seamless_clone_demo.gif", caption: "Poisson Blending Clone Demo" },
      { src: "Impaint_demo_gif.gif", caption: "Telea Algorithm Inpainting Demo" },
      { src: "custom_annoatation_gif.gif", caption: "COCO Annotator Demo" },
      { src: "HLSD_WEB_APP.png", caption: "Full-Stack Bidirectional Architecture" }
    ],
    summary: "A professional-grade, full-stack Computer Vision based Annotation App utilizing a custom bidirectional React frontend and OpenCV backend.",
    details: {
      problem: "Standard annotation tools struggle with high-FPS interactions synchronized with heavy mathematical Python image processing.",
      architecture: [
        { step: "React 18 & Fabric.js", desc: "Handles high-FPS interactions, zoom/pan deltas, and pixel-perfect coordinate tracking." },
        { step: "MIME-Type Force Injection", desc: "Implements a Windows Registry override in Python to ensure .js chunks are served as executable code." },
        { step: "Coordinate Normalization", desc: "Disables browser-side scaling for 1:1 pixel mapping to OpenCV matrices." },
        { step: "Persistent State", desc: "Synchronizes React useRef and Python st.session_state to allow UI updates without destroying canvas progress." }
      ]
    }
  },
  {
    id: "carrom-robot",
    title: "Autonomous Carrom Robot",
    subtitle: "AI-Powered Actuation",
    icon: <Target className="w-8 h-8 text-[#2563EB] icon-glow" strokeWidth={1.5} />,
    github: "https://github.com/Tanupvats/AI-Powered-Autonomous-Carrom-Robot",
    tags: ["YOLOv8", "OpenCV", "Arduino", "Kinematics","c++"],
    images: [
      { src: "system_architecture_autonomous_carrom_playing_robot.png", caption: "5-Layer System Architecture" },
      { src: "detected_output_0.jpg", caption: "YOLO Coin Detection" },
      { src: "striker_lines_corrected.jpg", caption: "Baseline Geometric Extraction" },
      { src: "kinematic_plan_output.jpg", caption: "Global Kinematic Shot Selection" },
      { src: "left_baseline_top3_plan.jpg", caption: "Left side striker Shot Selection" },
      { src: "right_baseline_top3_plan.jpg", caption: "right side striker Shot Selection" },
      
    ],
    summary: "An end-to-end robotic system capable of perceiving a physical carrom board, calculating optimal shot trajectories, and executing them.",
    details: {
      problem: "Translating digital pixel coordinates and complex rebound physics into mechanical linear actuation without coordinate drift.",
      architecture: [
        { step: "Perception & Geometry", desc: "YOLOv8 detects pieces; OpenCV extracts striker baselines via color segmentation." },
        { step: "Kinematic Solver", desc: "Ray-tracing evaluates all pocket-coin pairs and ranks shots based on occlusion and difficulty." },
        { step: "Dynamics Translation", desc: "Translates pixel coordinates into precise motor run-times using pre-calibrated linear velocity." },
        { step: "Hardware Integration", desc: "Arduino Uno controls an L298N driver powering BO gear motors and a central locking actuator for the strike." }
      ]
    }
  },
  {
    id: "car-segmentation",
    title: "Car Exterior Segmentation",
    subtitle: "Custom UNet++ Pipeline",
    icon: <Layers className="w-8 h-8 text-[#2563EB] icon-glow" strokeWidth={1.5} />,
    github: "https://github.com/Tanupvats/Custom-Image-Segmentation-with-Unet-PlusPlus",
    tags: ["UNet++","SAM", "SegFormer", "PyTorch", "Computer Vision", "Albumentations"],
    images: [
      { src: "car_part_segmenter_demo_sam.gif", caption: "High-Resolution Segmented Output" },
      { src: "segmentation_demo_1.gif", caption: "High-Resolution Segmented Output" },
      { src: "segmentation_demo.gif", caption: "High-Resolution Segmented Output" },
      { src: "seg_demo_image.jpg", caption: "High-Resolution Segmented Output" },
      { src: "training_and_inference_unet_Plus_plus.png", caption: "Unet++ Training & Inference" }
    ],
   summary: "A production-grade, multi-model semantic segmentation pipeline for fine-grained car exterior part segmentation (50 classes), supporting UNet++, SegFormer, and SAM.",
    details: {
      problem: "Segmenting fine-grained car exterior parts requires handling 50 highly imbalanced classes, necessitating a flexible pipeline that can leverage strong CNN baselines alongside state-of-the-art vision transformers.",
      architecture: [
        { step: "Model Architecture", desc: "Supports three model families: UNet++ (CNN baseline), SegFormer (Mix Transformer/ViT-based), and SAM (Segment Anything) for prompted/automatic segmentation." },
        { step: "Unified Training Engine", desc: "Utilizes a single training loop reused for all model families, unifying the forward signature for semantic models." },
        { step: "Compound Loss Optimization", desc: "Applies a compound loss (Dice + Cross-Entropy) with optional Focal/class-weighting to specifically handle the 50 imbalanced classes." },
        { step: "Efficient Fine-Tuning", desc: "SAM fine-tuning freezes the expensive ViT image encoder and trains only the mask and prompt decoders, making it approximately 150× cheaper than full fine-tuning." }      ]
    }
  },
  {
    id: "deep-som",
    title: "Deep SOM Segmentation",
    subtitle: "Large Scale Behavioral Clustering",
    icon: <Map className="w-8 h-8 text-[#2563EB] icon-glow" strokeWidth={1.5} />,
    github: "https://github.com/Tanupvats/Deep-SOM-Customer-Segmentation",
    tags: ["PyTorch", "SOM", "Clustering", "PCA"],
    images: [
      { src: "demo_layer_1.gif", caption: "Deep SOM Visualization Layer 1" },
      { src: "demo_macro_cluster.gif", caption: "Deep SOM Visualization Macro cluster" },
      { src: "DeepSOM_segmentation.png", caption: "Deep SOM Architecture" },
      { src: "SOM_architecture.png", caption: "Layer Grid Topologies" },
      { src: "2d_pca_10_Macro_Clusters.png", caption: "2D PCA Representation of Macro Clusters" }
    ],
    summary: "Hierarchical Self Organizing Map pipeline designed for processing and grouping millions of customers based on behavioral signals.",
    details: {
      problem: "Standard K-Means and agglomerative clustering falter on massive, multi-dimensional (mixed categorical/numeric) financial datasets.",
      architecture: [
        { step: "Hierarchical Topology", desc: "Layer 1 creates 400 micro-segments; Layer 2 groups them into 100 macro-segments." },
        { step: "Mini-Batch Optimization", desc: "Uses PyTorch for GPU-accelerated mini-batch SOM updates over 6M+ synthetic users." },
        { step: "Robust Preprocessing", desc: "Median imputation, standard scaling, and one-hot encoding optimized for memory efficiency." },
        { step: "Interpretability", desc: "Generates U-Matrices and Hitmaps to identify behavioral archetypes and boundaries." }
      ]
    }
  },
  {
    id: "mask-temp",
    title: "Smart Mask & Temp Detection",
    subtitle: "Safety Monitoring Edge System",
    icon: <Crosshair className="w-8 h-8 text-[#2563EB] icon-glow" strokeWidth={1.5} />,
    github: "https://github.com/Tanupvats/mask-temp-monitor",
    tags: ["MobileNetV2", "OpenCV", "Arduino", "IoT"],
    images: [
      { src: "demo_mask_temp_detection.gif", caption: "Real-time Webcam Inference Feed" },
      { src: "circuit_diagram.png", caption: "MLX90614 I2C Circuit Diagram" }
    ],
    summary: "A real-time embedded CV system detecting face masks and simultaneously measuring body temperature using an MLX90614 infrared sensor.",
    details: {
      problem: "Public health checkpoints require touchless, simultaneous, and low-latency processing of both visual cues and physical temperature.",
      architecture: [
        { step: "Deep Learning Edge Model", desc: "MobileNetV2 trained for lightweight, real-time mask classification." },
        { step: "Temperature Integration", desc: "Adafruit Metro 328 interfaces via I2C to the MLX90614 sensor." },
        { step: "Serial Communication", desc: "Arduino streams sensor data via PySerial to merge with the Python OpenCV pipeline." },
        { step: "Fever Logic", desc: "System dynamically flags visual warnings if readings exceed 37.5°C." }
      ]
    }
  },
  {
    id: "face-recognition",
    title: "Dual-Comparison Face Recognition",
    subtitle: "Real-Time KYC & Anti-Spoofing",
    icon: <Fingerprint className="w-8 h-8 text-[#2563EB] icon-glow" strokeWidth={1.5} />,
    github: "https://github.com/Tanupvats/kyc-fraud-face-recognition-system",
    tags: ["FAISS", "InsightFace", "RetinaNet", "Transfer Learning"],
    images: [
      { src: "Face_recognition_fraud.png", caption: "Inference Pipeline & Vector Search" },
      { src: "Face_recog_demo.gif", caption: "Real-Time Recognition Output" },
      { src: "retinanet_transferl_learning.png", caption: "RetinaNet Face Detection Transfer Learning" },
      { src: "embedding_extraction.png", caption: "FaceNet Embedding Extraction" }
    ],
    summary: "Production-grade biometric identity system for Real-time Authentication (Live-to-Live) and KYC/Onboarding Verification (Live-to-Doc).",
    details: {
      problem: "Scalable facial recognition requires handling varying illumination, presentation attacks (spoofing), and ultra-fast matching across millions of vectors.",
      architecture: [
        { step: "Detection & Preprocessing", desc: "InsightFace/RetinaNet detects, crops, and aligns faces using 106-point landmarks." },
        { step: "High-Dimensional Embeddings", desc: "Maps facial features to an L2-normalized 512-D vector space." },
        { step: "Vector Database Search", desc: "FAISS enables sub-millisecond Approximate Nearest Neighbor (ANN) cosine similarity lookups." },
        { step: "Anti-Spoofing Hook", desc: "Integrated liveness checks to prevent physical and digital presentation attacks." }
      ]
    }
  },
  {
    id: "person-tracking",
    title: "Sensor-based Person Tracking",
    subtitle: "Extended Kalman Filter Implementation",
    icon: <Map className="w-8 h-8 text-[#2563EB] icon-glow" strokeWidth={1.5} />,
    github: "https://github.com/Tanupvats/Tracking-Person-Movement-Using-Mobile-Sensor-Data",
    tags: ["EKF", "Python", "Signal Processing", "Data Viz", "Object Tracking"],
    images: [
      { src: "urban_canyon_track.gif", caption: "Urban Area Tracking Output" },
      { src: "circle_track.gif", caption: "Circular Path Tracking Output" },
      { src: "figure_eight_track.gif", caption: "Figure-Eight Tracking Output" },
      { src: "highway_track.gif", caption: "highway Tracking Output" },
      { src: "pedestrian_track.gif", caption: "pedestrian Walk Tracking Output" }
    ],
    summary: "A production-grade Python project for tracking person and vehicle movement by fusing IMU, GPS, and magnetometer data, achieving a 54% mean improvement over raw GPS.",
    details: {
      problem: "Raw GPS data is prone to outages and multipath errors (especially in urban canyons), requiring the fusion of high-rate inertial sensors to reconstruct smooth, accurate trajectories and handle outliers.",
      architecture: [
        { step: "Sensor Integration", desc: "Fuses high-rate (100 Hz) IMU data with slower GPS (1 Hz) and magnetometer (10 Hz) measurements using a loosely-coupled design." },
        { step: "State Estimation", desc: "Utilizes an error-state EKF with IMU-driven strap-down propagation, featuring online accelerometer and gyroscope bias estimation." },
        { step: "Outlier Handling", desc: "Implements Normalised Innovation Squared (NIS) gating for multipath rejection, adaptive process noise, and guarded Zero-Velocity Updates (ZUPT)." },
        { step: "Visualization", desc: "Generates dashboard animations showing bird's-eye trajectories with 2-σ uncertainty ellipses and dynamic mode indicators." }    ]
    }
  }
];

const AWARDS = [
  { title: "IBM FSS Converge Winner", desc: "Awarded for building the Best Agentic System for Banking (Dec 2025)." },
  { title: "TEDDI Recognition", desc: "Industry award for the most effective project and core contributions at TVS Credit." },
  { title: "Tech-Titan & Wall of Awesomeness", desc: "Recognized for outstanding contributions and excellence at Digit Insurance." },
  { title: "Publication: SpringerLink", desc: "Carrom Playing Robot with Automatic Shot Selection using OpenCV and Trajectory Physics." }
];

// --- COMPONENTS ---

const Navbar = () => (
  <nav className="fixed w-full z-40 top-0 backdrop-blur-xl bg-[#FFFFFF]/90 border-b border-[#CBD5E1]">
    <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <BrainCircuit className="w-6 h-6 text-[#2563EB] icon-glow" strokeWidth={1.5} />
        <span className="text-xl font-display font-bold text-[#0F172A] tracking-tight">Tanup<span className="text-[#2563EB]">Vats</span></span>
      </div>
      <div className="hidden md:flex space-x-8 text-sm font-medium font-body">
        <a href="#experience" className="text-slate-600 hover:text-[#2563EB] transition-colors">Experience</a>
        <a href="#systems" className="text-slate-600 hover:text-[#2563EB] transition-colors">Systems & Architecture</a>
        <a href="#awards" className="text-slate-600 hover:text-[#2563EB] transition-colors">Accolades</a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <header className="relative pt-40 pb-24 px-6 overflow-hidden border-b border-[#CBD5E1] bg-[#F8FAFC]">
    <div className="absolute inset-0"></div>
    <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[450px] w-[450px] rounded-full bg-[#2563EB] opacity-[0.05] blur-[150px]"></div>
    
    <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-start justify-between gap-12">
      <div className="flex-1">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#2563EB] text-sm font-medium mb-8 font-body shadow-[0_0_10px_rgba(37,99,235,0.1)]">
          <Activity className="w-4 h-4" strokeWidth={2} /> Available for Senior ML Roles
        </div>
        <h1 className="text-5xl md:text-7xl font-display font-extrabold text-[#0F172A] tracking-tight mb-6 leading-[1.1]">
          Architecting <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#1E40AF] text-glow">
            Intelligence at Scale.
          </span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl text-slate-600 mb-10 leading-relaxed font-body font-light">
          Senior Data Scientist with 5.5+ years of experience bridging the gap between deep AI research and production-grade engineering. Specializing in Generative AI, Agentic Systems, and high-performance Computer Vision pipelines.
        </p>
        <div className="flex flex-wrap gap-4 font-body">
          <a href="#systems" className="px-8 py-3.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-medium rounded-md transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] flex items-center gap-2 tracking-wide">
            Explore Architecture <ChevronRight className="w-4 h-4" strokeWidth={2} />
          </a>
          <a href="mailto:mastertanupvats@gmail.com" className="px-8 py-3.5 bg-[#FFFFFF] hover:bg-slate-50 text-[#0F172A] font-medium rounded-md border border-[#CBD5E1] transition-all flex items-center gap-2 tracking-wide shadow-sm">
            <Mail className="w-4 h-4" strokeWidth={1.5} /> Contact Me
          </a>
        </div>
      </div>
      
      {/* Quick Info Box */}
      <div className="w-full md:w-80 bg-[#FFFFFF] border border-[#CBD5E1] rounded-xl p-7 shadow-xl relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#2563EB] to-[#1E40AF] transform origin-left transition-transform duration-500"></div>
        <h3 className="text-[#0F172A] font-display font-bold text-lg mb-5 flex items-center gap-2 tracking-wide">
          <Terminal className="w-5 h-5 text-[#2563EB] icon-glow" strokeWidth={1.5} /> Terminal / Status
        </h3>
        <div className="space-y-4 font-mono text-sm tracking-tight">
          <div>
            <span className="text-slate-500 block mb-0.5">Location:</span>
            <p className="text-[#0F172A] font-medium">Bangalore, Karnataka</p>
          </div>
          <div>
            <span className="text-slate-500 block mb-0.5">Phone:</span>
            <p className="text-[#0F172A] font-medium">+91 9654413334 | 6287275079</p>
          </div>
          <div>
            <span className="text-slate-500 block mb-0.5">Email:</span>
            <p className="text-[#0F172A] font-medium">mastertanupvats@gmail.com</p>
          </div>
          <div className="pt-5 mt-5 border-t border-[#CBD5E1]">
            <span className="text-slate-500 block mb-2.5">Core Stack:</span>
            <div className="flex flex-wrap gap-2">
              <span className="px-2.5 py-1 bg-[#F8FAFC] rounded text-[#2563EB] text-xs font-medium border border-[#CBD5E1] shadow-sm">Python</span>
              <span className="px-2.5 py-1 bg-[#F8FAFC] rounded text-[#2563EB] text-xs font-medium border border-[#CBD5E1] shadow-sm">C++</span>
              <span className="px-2.5 py-1 bg-[#F8FAFC] rounded text-[#2563EB] text-xs font-medium border border-[#CBD5E1] shadow-sm">AI/ML/Dl</span>
              <span className="px-2.5 py-1 bg-[#F8FAFC] rounded text-[#2563EB] text-xs font-medium border border-[#CBD5E1] shadow-sm">Generative/Agentic AI</span>
              <span className="px-2.5 py-1 bg-[#F8FAFC] rounded text-[#2563EB] text-xs font-medium border border-[#CBD5E1] shadow-sm">Computer Vision</span>
              <span className="px-2.5 py-1 bg-[#F8FAFC] rounded text-[#2563EB] text-xs font-medium border border-[#CBD5E1] shadow-sm">cloud-GCP/AWS/Azure</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

const Skills = () => (
  <section className="py-20 px-6 bg-[#FFFFFF]">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-3 gap-6">
        {Object.entries(SKILLS).map(([category, skills], idx) => (
          <div key={idx} className="p-7 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] hover:border-[#2563EB]/50 transition-colors shadow-sm">
            <h3 className="text-[#0F172A] font-display font-semibold mb-5 flex items-center gap-3 text-lg tracking-wide">
              {idx === 0 && <BrainCircuit className="w-5 h-5 text-[#2563EB] icon-glow" strokeWidth={1.5} />}
              {idx === 1 && <Cpu className="w-5 h-5 text-[#2563EB] icon-glow" strokeWidth={1.5} />}
              {idx === 2 && <Server className="w-5 h-5 text-[#2563EB] icon-glow" strokeWidth={1.5} />}
              {category}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {skills.map((skill, sIdx) => (
                <span key={sIdx} className="px-3 py-1.5 bg-[#FFFFFF] text-slate-700 text-sm font-medium rounded-md border border-[#CBD5E1] hover:text-[#2563EB] hover:border-[#2563EB]/40 transition-colors shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Experience = () => (
  <section id="experience" className="py-24 px-6 relative bg-[#F8FAFC]">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-display font-bold text-[#0F172A] mb-16 flex items-center gap-4 tracking-tight">
        <span className="w-8 h-[2px] bg-[#2563EB]"></span> Professional Trajectory
      </h2>
      
      <div className="space-y-12">
        {EXPERIENCE.map((exp, idx) => (
          <div key={idx} className="relative pl-8 md:pl-0">
            {/* Timeline Line (Mobile) */}
            <div className="md:hidden absolute left-0 top-2 bottom-0 w-[2px] bg-[#CBD5E1]"></div>
            <div className="md:hidden absolute left-[-4px] top-2 w-[10px] h-[10px] rounded-full bg-[#2563EB] border-2 border-[#F8FAFC]"></div>

            <div className="grid md:grid-cols-[1fr_3fr] gap-4 md:gap-8 group">
              <div className="text-slate-500 font-mono text-sm pt-1 md:text-right border-r-0 md:border-r-2 border-[#CBD5E1] md:pr-8 group-hover:border-[#2563EB]/50 transition-colors relative">
                {exp.period}
                {/* Timeline Dot (Desktop) */}
                <div className="hidden md:block absolute right-[-7px] top-1.5 w-[12px] h-[12px] rounded-full bg-[#CBD5E1] border-2 border-[#F8FAFC] group-hover:bg-[#2563EB] transition-all"></div>
              </div>
              <div className="bg-[#FFFFFF] p-7 rounded-xl border border-[#CBD5E1] hover:border-[#2563EB]/50 transition-all shadow-sm hover:shadow-md">
                <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-1 tracking-wide">{exp.role}</h3>
                <h4 className="text-[#2563EB] font-medium mb-5 tracking-wide">{exp.company} <span className="text-slate-300 mx-2">|</span> <span className="text-slate-500 font-normal">{exp.location}</span></h4>
                <ul className="space-y-3.5 text-slate-700 leading-relaxed text-sm md:text-base font-light">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex gap-3 items-start">
                      <ChevronRight className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" strokeWidth={2} />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- MODAL COMPONENTS ---

// Declarative, safe Image component with Hover and Error States
const ProjectImage = ({ img, onZoomRequest }) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div 
      className="relative w-full h-[320px] bg-[#F8FAFC] rounded-xl overflow-hidden border border-[#CBD5E1] group shadow-sm hover:shadow-lg hover:border-[#2563EB]/40 transition-all duration-300 cursor-zoom-in"
      onClick={() => !hasError && onZoomRequest(img.src)}
    >
      {!hasError ? (
        <img 
          src={img.src} 
          alt={img.caption} 
          loading="lazy"
          className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500 ease-out"
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500 bg-[#F8FAFC] p-4">
          <Code className="w-10 h-10 mb-2 opacity-50" strokeWidth={1} />
          <span className="text-xs text-center border border-dashed border-[#CBD5E1] p-2 rounded w-full font-mono">
            Image Unavailable:<br/>{img.src}
          </span>
        </div>
      )}

      {/* Sliding hover caption */}
      <div className="absolute bottom-0 left-0 w-full bg-white/95 backdrop-blur-md text-[#0F172A] border-t border-[#CBD5E1] p-4 text-sm font-medium transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-20 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        <span className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-[#2563EB]" />
          {img.caption}
        </span>
      </div>
      
      {/* Top badge (fades out on hover) */}
      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-md text-xs font-semibold text-[#0F172A] border border-[#CBD5E1] shadow-sm opacity-100 group-hover:opacity-0 transition-opacity duration-300 z-10 pointer-events-none">
        {img.caption}
      </div>
    </div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  const [zoomedImage, setZoomedImage] = useState(null);

  // Lock body scroll securely
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; }
  }, []);

  // Safe robust escape handler to handle both Lightbox and Modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setZoomedImage((currentZoomedImage) => {
          if (currentZoomedImage) {
            // If lightbox is open, close lightbox only
            return null;
          } else {
            // If lightbox is closed, close the entire modal
            onClose();
            return null; // keep it null
          }
        });
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <>
      {/* Main Project Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        <div className="absolute inset-0 bg-[#0F172A]/40 backdrop-blur-md" onClick={onClose}></div>
        <div className="relative w-full max-w-5xl max-h-[90vh] bg-[#FFFFFF] border border-[#CBD5E1] rounded-xl shadow-2xl overflow-y-auto flex flex-col font-body">
          
          {/* Modal Header */}
          <div className="sticky top-0 bg-[#FFFFFF]/95 backdrop-blur-xl p-6 border-b border-[#CBD5E1] flex flex-col sm:flex-row gap-4 justify-between sm:items-start z-10">
            <div className="flex items-center gap-5">
              <div className="hidden sm:block p-3.5 bg-[#F8FAFC] rounded-xl border border-[#CBD5E1] shadow-sm">
                {project.icon}
              </div>
              <div>
                <h2 className="text-3xl font-display font-bold text-[#0F172A] leading-tight tracking-tight mb-1">{project.title}</h2>
                <p className="text-[#2563EB] font-medium tracking-wide">{project.subtitle}</p>
              </div>
            </div>
            
            {/* Actions: Repo & Close */}
            <div className="flex items-center gap-3">
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 px-4 py-2 bg-[#0F172A] hover:bg-[#1E293B] text-white text-sm font-medium rounded-lg transition-colors shadow-sm"
                >
                  <Github className="w-4 h-4" />
                  View Source
                </a>
              )}
              <button 
                onClick={onClose} 
                aria-label="Close modal"
                className="p-2.5 text-slate-400 hover:text-[#0F172A] hover:bg-[#F8FAFC] rounded-full transition-colors"
              >
                <X className="w-6 h-6" strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-8 space-y-10">
            
            {/* Visuals First: Architecture, Demo GIFs, Images */}
            {project.images && project.images.length > 0 && (
              <div>
                <h3 className="text-slate-500 font-display uppercase text-xs font-bold tracking-[0.2em] mb-5">System Visuals & Demos</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.images.map((img, idx) => (
                    <ProjectImage 
                      key={idx} 
                      img={img} 
                      onZoomRequest={(src) => setZoomedImage(src)} 
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Small Details / Overview (Right after visuals) */}
            <div>
              <h3 className="text-slate-500 font-display uppercase text-xs font-bold tracking-[0.2em] mb-4">Project Overview & Challenge</h3>
              <div className="bg-[#F8FAFC] p-6 rounded-xl border border-[#CBD5E1] shadow-sm transition-all hover:shadow-md">
                <p className="text-[#0F172A] font-medium text-lg mb-4 leading-relaxed">
                  {project.summary}
                </p>
                <p className="text-slate-600 leading-relaxed font-light text-base border-t border-[#CBD5E1] pt-4">
                  <strong className="font-semibold text-[#1E40AF]">The Challenge:</strong> {project.details.problem}
                </p>
              </div>
            </div>

            {/* Architecture & Pipeline */}
            <div>
              <h3 className="text-slate-500 font-display uppercase text-xs font-bold tracking-[0.2em] mb-5">System Architecture & Pipeline</h3>
              <div className="grid gap-4">
                {project.details.architecture.map((layer, idx) => (
                  <div key={idx} className="flex gap-5 p-5 rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] hover:border-[#2563EB]/40 transition-colors group shadow-sm">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FFFFFF] text-[#2563EB] flex items-center justify-center font-display font-bold text-sm border border-[#CBD5E1] group-hover:border-[#2563EB]/50 group-hover:bg-[#2563EB]/10 transition-colors shadow-sm">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-[#0F172A] font-display font-semibold mb-1.5 text-lg tracking-wide">{layer.step}</h4>
                      <p className="text-slate-600 text-base leading-relaxed font-light">{layer.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology Stack */}
            <div>
              <h3 className="text-slate-500 font-display uppercase text-xs font-bold tracking-[0.2em] mb-4">Technology Stack</h3>
              <div className="flex flex-wrap gap-2.5">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="px-3.5 py-1.5 bg-[#2563EB]/10 text-[#2563EB] font-medium text-sm rounded-md border border-[#2563EB]/20 shadow-sm hover:bg-[#2563EB] hover:text-white transition-colors cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox / Zoomed Image Overlay - Mounted above modal (z-[60]) */}
      {zoomedImage && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-[#0F172A]/90 backdrop-blur-sm transition-opacity" 
          onClick={() => setZoomedImage(null)}
        >
          <div className="relative max-w-[85vw] max-h-[85vh] flex items-center justify-center">
            <button 
              className="absolute -top-12 right-0 md:-right-12 text-white/70 hover:text-white transition-colors p-2"
              onClick={() => setZoomedImage(null)}
              aria-label="Close zoomed image"
            >
              <X className="w-8 h-8" strokeWidth={1.5} />
            </button>
            <img 
              src={zoomedImage} 
              alt="Zoomed detailed view" 
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl cursor-zoom-out"
            />
          </div>
        </div>
      )}
    </>
  );
};

const Systems = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="systems" className="py-24 px-6 bg-[#FFFFFF] relative border-t border-[#CBD5E1]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold text-[#0F172A] mb-5 flex items-center gap-4 tracking-tight">
            <span className="w-8 h-[2px] bg-[#2563EB]"></span> Featured Architectures
          </h2>
          <p className="text-slate-600 max-w-2xl font-light text-lg leading-relaxed">
            A comprehensive selection of production-grade systems spanning Generative AI, Multi-Agent Orchestration, and low-level Model Compression. Click on any card to dive into the architecture diagrams and workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div 
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-[#F8FAFC] rounded-xl border border-[#CBD5E1] overflow-hidden hover:border-[#2563EB]/50 hover:shadow-[0_8px_30px_rgba(37,99,235,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full shadow-sm"
            >
              <div className="p-7 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-7">
                  <div className="p-3.5 bg-[#FFFFFF] rounded-xl border border-[#CBD5E1] group-hover:scale-110 transition-transform duration-300 shadow-sm group-hover:shadow-[0_0_15px_rgba(37,99,235,0.1)] group-hover:border-[#2563EB]/30">
                    {project.icon}
                  </div>
                  <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-[#2563EB] transition-colors" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-1.5 group-hover:text-[#2563EB] transition-colors tracking-wide">{project.title}</h3>
                <h4 className="text-sm font-medium text-slate-500 mb-5">{project.subtitle}</h4>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-1 font-light">
                  {project.summary}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-[#FFFFFF] text-slate-600 text-xs font-medium rounded border border-[#CBD5E1]">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2.5 py-1 bg-[#FFFFFF] text-slate-500 text-xs font-medium rounded border border-[#CBD5E1]">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Render Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

const Awards = () => (
  <section id="awards" className="py-24 px-6 bg-[#F8FAFC] border-t border-[#CBD5E1]">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-display font-bold text-[#0F172A] mb-12 flex items-center gap-4 tracking-tight">
        <span className="w-8 h-[2px] bg-[#2563EB]"></span> Accolades & Research
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {AWARDS.map((award, idx) => (
          <div key={idx} className="flex gap-5 p-7 bg-[#FFFFFF] rounded-xl border border-[#CBD5E1] hover:border-[#2563EB]/40 transition-colors shadow-sm hover:shadow-md">
            <div className="shrink-0">
              <Zap className="w-7 h-7 text-[#2563EB] icon-glow" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-[#0F172A] font-display font-bold text-lg mb-2 tracking-wide">{award.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm font-light">{award.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 px-6 border-t border-[#CBD5E1] bg-[#FFFFFF]">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm font-body">
      <div className="flex items-center gap-2">
        <BrainCircuit className="w-5 h-5 text-[#2563EB]" strokeWidth={1.5} />
        <span className="font-display font-bold text-[#0F172A] tracking-wide">Tanup Vats</span>
        <span>&copy; {new Date().getFullYear()}</span>
      </div>
      <div className="flex gap-6 font-medium">
        <a href="mailto:mastertanupvats@gmail.com" className="hover:text-[#2563EB] transition-colors">Email</a>
        <a href="#" className="hover:text-[#2563EB] transition-colors">LinkedIn</a>
      </div>
    </div>
  </footer>
);

// --- MAIN APP ---

export default function App() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Outfit:wght@300;400;600;700;800&display=swap');
        .font-body { font-family: 'Inter', sans-serif; }
        .font-display { font-family: 'Outfit', sans-serif; }
        .text-glow { text-shadow: 0 0 20px rgba(37,99,235,0.3); }
        .icon-glow { filter: drop-shadow(0 0 8px rgba(37,99,235,0.4)); }
      `}</style>
      <div className="min-h-screen bg-[#F8FAFC] text-slate-600 font-body selection:bg-[#2563EB]/20 selection:text-[#0F172A] scroll-smooth">
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Experience />
          <Systems />
          <Awards />
        </main>
        <Footer />
      </div>
    </>
  );
}