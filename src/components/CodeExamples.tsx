import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Play, Code2 } from 'lucide-react';

const CodeExamples = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('training');

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const codeExamples = {
    training: {
      title: 'Training Setup',
      description: 'Fine-tune Gemma 7B on Indian languages using Unsloth',
      code: `from unsloth import FastLanguageModel
import torch

# Load base model
model, tokenizer = FastLanguageModel.from_pretrained(
    model_name = "google/gemma-7b", 
    max_seq_length = 2048,
    dtype = None,
    load_in_4bit = False,
    token = '<HF_TOKEN>',
)

# Setup LoRA
model = FastLanguageModel.get_peft_model(
    model,
    r = 64,
    target_modules = ["q_proj", "k_proj", "v_proj", "o_proj",
                      "gate_proj", "up_proj", "down_proj"],
    lora_alpha = 128,
    lora_dropout = 0,
    bias = "none",
    use_gradient_checkpointing = True,
    random_state = 3407,
)`
    },
    inference: {
      title: 'Inference Example',
      description: 'Generate responses using the fine-tuned model',
      code: `from unsloth import FastLanguageModel

# Load fine-tuned model
model, tokenizer = FastLanguageModel.from_pretrained(
    model_name = "Telugu-LLM-Labs/Indic-gemma-7b-finetuned-sft-Navarasa", 
    max_seq_length = 2048,
    dtype = None,
    load_in_4bit = False,
)

FastLanguageModel.for_inference(model)

# Alpaca prompt format
alpaca_prompt = """
### Instruction:
{}

### Input:
{}

### Response:
{}"""

# Generate response
inputs = tokenizer([
    alpaca_prompt.format(
        "Translate following sentence to Hindi.",
        "India is a great country.",
        ""
    )
], return_tensors = "pt").to("cuda")

outputs = model.generate(**inputs, max_new_tokens = 1000, use_cache = True)
print(tokenizer.batch_decode(outputs))`
    },
    rag: {
      title: 'RAG Implementation',
      description: 'Implement RAG with LlamaIndex and multilingual embeddings',
      code: `from llama_index.core import VectorStoreIndex, SimpleDirectoryReader, Settings
from llama_index.llms.huggingface import HuggingFaceInferenceAPI
from llama_index.embeddings.cohere import CohereEmbedding

# Setup LLM
llm = HuggingFaceInferenceAPI(
    model_name="<DEPLOYED MODEL URL>", 
    token='HF_TOKEN'
)

# Setup multilingual embeddings
embed_model = CohereEmbedding(
    cohere_api_key='<COHEREAI API KEY>',
    model_name="embed-multilingual-v3.0",
)

# Configure settings
Settings.llm = llm
Settings.embed_model = embed_model
Settings.chunk_size = 512

# Load and index documents
documents = SimpleDirectoryReader(input_files=['data.txt']).load_data()
index = VectorStoreIndex.from_documents(documents)

# Create query engine
query_engine = index.as_query_engine(similarity_top_k=2)

# Query in Hindi
response = query_engine.query("2024 में भारतीय चुनाव कब हो रहे हैं?")
print(response)`
    }
  };

  const tabs = [
    { id: 'training', label: 'Training', icon: Code2 },
    { id: 'inference', label: 'Inference', icon: Play },
    { id: 'rag', label: 'RAG Setup', icon: Code2 },
  ];

  return (
    <section id="examples" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Code <span className="gradient-text">Examples</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started quickly with these comprehensive examples covering training, 
            inference, and RAG implementation.
          </p>
        </motion.div>

        <div className="glass-card rounded-2xl overflow-hidden">
          {/* Tab Navigation */}
          <div className="flex border-b border-gray-200 bg-gray-50/50">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-4 font-medium transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'text-primary-600 border-b-2 border-primary-600 bg-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <tab.icon size={18} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Code Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="p-6"
          >
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {codeExamples[activeTab as keyof typeof codeExamples].title}
              </h3>
              <p className="text-gray-600">
                {codeExamples[activeTab as keyof typeof codeExamples].description}
              </p>
            </div>

            <div className="relative">
              <button
                onClick={() => copyToClipboard(
                  codeExamples[activeTab as keyof typeof codeExamples].code,
                  activeTab
                )}
                className="absolute top-4 right-4 p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 z-10"
              >
                {copiedCode === activeTab ? (
                  <Check size={16} className="text-green-400" />
                ) : (
                  <Copy size={16} className="text-gray-300" />
                )}
              </button>
              <pre className="code-block">
                <code>{codeExamples[activeTab as keyof typeof codeExamples].code}</code>
              </pre>
            </div>
          </motion.div>
        </div>

        {/* Additional Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Jupyter Notebooks</h3>
            <p className="text-gray-600 mb-4">
              Complete training and inference notebooks with step-by-step instructions.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-700">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span>training.ipynb - Full training pipeline</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-700">
                <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                <span>inference.ipynb - Model inference examples</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-700">
                <div className="w-2 h-2 bg-success-500 rounded-full"></div>
                <span>RAG_with_Navarasa2.0_LlamaIndex.ipynb - RAG setup</span>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Model Variants</h3>
            <p className="text-gray-600 mb-4">
              Different model configurations optimized for various use cases.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-700">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Gemma 7B - Full model (recommended)</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-700">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Gemma 2B - Lightweight version</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-700">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span>4-bit quantized - Memory efficient</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodeExamples;