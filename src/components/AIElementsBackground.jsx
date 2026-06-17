import "../styles/ai-background.css";
import { Network, BrainCircuit, Workflow, Binary } from "lucide-react";

function AIElementsBackground() {
  return (
    <div className="ai-bg-container">
      <div className="tech-node tn-1">[LangGraph Agent]</div>
      <div className="tech-node tn-2">FAISS Vector Store</div>
      <div className="tech-node tn-3">XGBoost Pipeline</div>
      <div className="tech-node tn-4">Groq LLM</div>

      <div className="ai-node node-1">
        <Network size={180} strokeWidth={0.5} />
      </div>
      <div className="ai-node node-2">
        <BrainCircuit size={220} strokeWidth={0.5} />
      </div>
      <div className="ai-node node-3">
        <Workflow size={160} strokeWidth={0.5} />
      </div>
      <div className="ai-node node-4">
        <Binary size={140} strokeWidth={0.5} />
      </div>

      <div className="data-stream stream-x stream-1"></div>
      <div className="data-stream stream-x stream-2"></div>
      <div className="data-stream stream-y stream-3"></div>
      
      <div className="vector-point vp-1"></div>
      <div className="vector-point vp-2"></div>
      <div className="vector-point vp-3"></div>
      <div className="vector-point vp-4"></div>
      <div className="vector-point vp-5"></div>
      <div className="vector-point vp-6"></div>
    </div>
  );
}

export default AIElementsBackground;
