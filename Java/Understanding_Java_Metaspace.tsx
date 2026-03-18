import React, { useState } from 'react';
import { ChevronRight, BookOpen, Layers, Zap, Settings, AlertTriangle } from 'lucide-react';

export default function MetaspaceGuide() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      id: 0,
      title: "What is Metaspace?",
      icon: BookOpen,
      content: "introduction"
    },
    {
      id: 1,
      title: "The Problem Before Metaspace",
      icon: AlertTriangle,
      content: "problem"
    },
    {
      id: 2,
      title: "How Metaspace Works",
      icon: Layers,
      content: "how"
    },
    {
      id: 3,
      title: "Memory Architecture",
      icon: Zap,
      content: "architecture"
    },
    {
      id: 4,
      title: "Configuration & Tuning",
      icon: Settings,
      content: "config"
    }
  ];

  const StepButton = ({ step, index }) => {
    const Icon = step.icon;
    return (
      <button
        onClick={() => setCurrentStep(index)}
        className={`w-full text-left p-4 rounded-lg transition-all ${
          currentStep === index
            ? 'bg-blue-600 text-white shadow-lg scale-105'
            : 'bg-white text-slate-700 hover:bg-slate-50 border-2 border-slate-200'
        }`}
      >
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
            currentStep === index ? 'bg-white text-blue-600' : 'bg-blue-100 text-blue-600'
          }`}>
            <Icon className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <div className="text-xs opacity-70">Step {index + 1}</div>
            <div className="font-semibold">{step.title}</div>
          </div>
          {currentStep === index && <ChevronRight className="w-5 h-5" />}
        </div>
      </button>
    );
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-3">
            Understanding Java Metaspace
          </h1>
          <p className="text-lg text-slate-600">
            A Step-by-Step Visual Guide for Beginners
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1 space-y-3">
            {steps.map((step, index) => (
              <StepButton key={step.id} step={step} index={index} />
            ))}
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-2xl p-6 md:p-8">
            
            {/* Step 0: Introduction */}
            {currentStep === 0 && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-slate-800 mb-6">
                  🎯 What is Metaspace?
                </h2>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Simple Definition</h3>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    <strong>Metaspace</strong> is a special memory area in Java (from Java 8 onwards) where the JVM stores 
                    information about your classes - like their structure, methods, and fields.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-purple-900 mb-4">📚 Think of it like a Library</h3>
                  <div className="space-y-3 text-slate-700">
                    <p>Imagine your Java application is a library:</p>
                    <div className="ml-4 space-y-2">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">📖</span>
                        <div>
                          <strong>Your Classes</strong> = Books in the library
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">📋</span>
                        <div>
                          <strong>Metaspace</strong> = The catalog system that keeps track of all books (what pages they have, chapters, etc.)
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">🏢</span>
                        <div>
                          <strong>Native Memory</strong> = The building where the catalog is stored (separate from the reading rooms)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-5 rounded-xl border-2 border-green-200">
                    <h4 className="font-bold text-green-800 mb-3">✅ What Metaspace Stores</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <span><strong>Class metadata</strong> - class structure and information</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <span><strong>Method information</strong> - what methods exist</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <span><strong>Field information</strong> - what variables a class has</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <span><strong>Constant pool</strong> - constants used by classes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <span><strong>Bytecode</strong> - compiled Java instructions</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-red-50 p-5 rounded-xl border-2 border-red-200">
                    <h4 className="font-bold text-red-800 mb-3">❌ What Metaspace Does NOT Store</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">•</span>
                        <span><strong>Objects</strong> - stored in heap memory</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">•</span>
                        <span><strong>String pool</strong> - moved to heap in Java 8</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">•</span>
                        <span><strong>Static variables</strong> - also moved to heap</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">•</span>
                        <span><strong>Instance data</strong> - lives in heap</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-r-lg">
                  <h4 className="font-bold text-yellow-900 mb-2">💡 Key Point</h4>
                  <p className="text-slate-700">
                    Metaspace is <strong>metadata about your code</strong>, not the actual objects your code creates. 
                    When you create a new <code className="bg-yellow-100 px-2 py-1 rounded">Person</code> object, 
                    the object goes in the heap, but information about the <code className="bg-yellow-100 px-2 py-1 rounded">Person</code> class 
                    (what fields it has, what methods) goes in Metaspace.
                  </p>
                </div>
              </div>
            )}

            {/* Step 1: The Problem */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-slate-800 mb-6">
                  ⚠️ The Problem Before Metaspace
                </h2>

                <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-red-900 mb-3">The PermGen Problem (Java 7 and earlier)</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Before Java 8, class metadata was stored in an area called <strong>PermGen (Permanent Generation)</strong>. 
                    This had several serious problems.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-slate-800">Problems with PermGen:</h3>
                  
                  {/* Problem 1 */}
                  <div className="bg-white border-2 border-red-300 rounded-xl p-5">
                    <div className="flex items-start gap-3 mb-3">
                      <span className="text-3xl">🔒</span>
                      <div>
                        <h4 className="text-lg font-bold text-red-800">Problem 1: Fixed Size</h4>
                        <p className="text-slate-600 text-sm mt-1">PermGen had a fixed maximum size that you had to set upfront</p>
                      </div>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="text-sm text-slate-700 mb-2"><strong>Scenario:</strong></p>
                      <p className="text-sm text-slate-600">
                        You set PermGen to 128MB. Your app loads 1000 classes = 100MB (OK ✓). 
                        Later you add more features, now 1500 classes = 150MB... 
                        <span className="text-red-700 font-bold"> CRASH! OutOfMemoryError: PermGen space</span>
                      </p>
                    </div>
                  </div>

                  {/* Problem 2 */}
                  <div className="bg-white border-2 border-red-300 rounded-xl p-5">
                    <div className="flex items-start gap-3 mb-3">
                      <span className="text-3xl">🎯</span>
                      <div>
                        <h4 className="text-lg font-bold text-red-800">Problem 2: Difficult to Tune</h4>
                        <p className="text-slate-600 text-sm mt-1">How much PermGen do you need? Nobody knew!</p>
                      </div>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="text-sm text-slate-700 mb-2"><strong>The Guessing Game:</strong></p>
                      <ul className="text-sm text-slate-600 space-y-1 ml-4">
                        <li>• Too small → OutOfMemoryError crashes</li>
                        <li>• Too large → Wasting memory</li>
                        <li>• Just right → But only for NOW, what about later?</li>
                      </ul>
                    </div>
                  </div>

                  {/* Problem 3 */}
                  <div className="bg-white border-2 border-red-300 rounded-xl p-5">
                    <div className="flex items-start gap-3 mb-3">
                      <span className="text-3xl">🗑️</span>
                      <div>
                        <h4 className="text-lg font-bold text-red-800">Problem 3: Memory Waste</h4>
                        <p className="text-slate-600 text-sm mt-1">String pool and static variables wasting space</p>
                      </div>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="text-sm text-slate-600">
                        PermGen stored class metadata + string pool + static variables all together. 
                        Strings are data, not metadata, so they didn't belong there!
                      </p>
                    </div>
                  </div>
                </div>

                {/* Visual Diagram */}
                <div className="bg-slate-100 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">📊 PermGen Memory Problem</h3>
                  <div className="max-w-md mx-auto">
                    <div className="bg-red-200 border-4 border-red-500 rounded-lg p-4 relative">
                      <div className="text-center font-bold text-red-900 mb-3">
                        PermGen (Fixed: 128 MB)
                      </div>
                      <div className="space-y-2">
                        <div className="bg-red-400 p-3 rounded text-white text-sm">
                          Class Metadata (80 MB)
                        </div>
                        <div className="bg-red-300 p-3 rounded text-white text-sm">
                          String Pool (30 MB)
                        </div>
                        <div className="bg-red-300 p-3 rounded text-white text-sm">
                          Static Variables (15 MB)
                        </div>
                        <div className="bg-red-500 p-3 rounded text-white text-sm font-bold animate-pulse">
                          More Classes? → CRASH! 💥
                        </div>
                      </div>
                      <div className="absolute -right-2 -bottom-2 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                        Can't Grow!
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
                  <h4 className="font-bold text-green-900 mb-2">✅ The Solution: Metaspace</h4>
                  <p className="text-slate-700">
                    Java 8 introduced Metaspace to solve all these problems by using native memory that can grow automatically!
                  </p>
                </div>
              </div>
            )}

            {/* Step 2: How It Works */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-slate-800 mb-6">
                  ⚙️ How Metaspace Works
                </h2>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border-2 border-blue-300">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">The Magic: Auto-Growing Memory</h3>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    Unlike PermGen, Metaspace automatically expands when you load more classes. 
                    It's like having an expandable bookshelf that adds more shelves as you get more books!
                  </p>
                </div>

                {/* Step by Step Process */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-slate-800">Step-by-Step: What Happens When You Load a Class</h3>

                  <div className="space-y-3">
                    {/* Step 1 */}
                    <div className="bg-white border-l-4 border-blue-500 p-5 rounded-r-lg shadow">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-blue-500 rounded-full text-white flex items-center justify-center font-bold">1</div>
                        <h4 className="text-lg font-bold text-slate-800">You Write Code</h4>
                      </div>
                      <div className="ml-11 bg-slate-50 p-3 rounded font-mono text-sm">
                        public class Person {'{'}<br/>
                        &nbsp;&nbsp;String name;<br/>
                        &nbsp;&nbsp;int age;<br/>
                        {'}'}
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-white border-l-4 border-blue-500 p-5 rounded-r-lg shadow">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-blue-500 rounded-full text-white flex items-center justify-center font-bold">2</div>
                        <h4 className="text-lg font-bold text-slate-800">Compiler Creates Bytecode</h4>
                      </div>
                      <p className="ml-11 text-slate-600 text-sm">
                        <code className="bg-slate-100 px-2 py-1 rounded">javac</code> compiles your code to <code className="bg-slate-100 px-2 py-1 rounded">Person.class</code> (bytecode file)
                      </p>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-white border-l-4 border-blue-500 p-5 rounded-r-lg shadow">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-blue-500 rounded-full text-white flex items-center justify-center font-bold">3</div>
                        <h4 className="text-lg font-bold text-slate-800">ClassLoader Loads the Class</h4>
                      </div>
                      <p className="ml-11 text-slate-600 text-sm">
                        When your program runs, the ClassLoader reads <code className="bg-slate-100 px-2 py-1 rounded">Person.class</code>
                      </p>
                    </div>

                    {/* Step 4 */}
                    <div className="bg-white border-l-4 border-green-500 p-5 rounded-r-lg shadow">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-green-500 rounded-full text-white flex items-center justify-center font-bold">4</div>
                        <h4 className="text-lg font-bold text-slate-800">Metadata Goes to Metaspace</h4>
                      </div>
                      <div className="ml-11">
                        <p className="text-slate-600 text-sm mb-2">JVM stores class information in Metaspace:</p>
                        <div className="bg-green-50 p-3 rounded text-sm space-y-1">
                          <div>✓ Class name: "Person"</div>
                          <div>✓ Fields: String name, int age</div>
                          <div>✓ Methods: (constructors, getters, setters)</div>
                          <div>✓ Access modifiers: public</div>
                          <div>✓ Parent class: Object</div>
                        </div>
                      </div>
                    </div>

                    {/* Step 5 */}
                    <div className="bg-white border-l-4 border-purple-500 p-5 rounded-r-lg shadow">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-purple-500 rounded-full text-white flex items-center justify-center font-bold">5</div>
                        <h4 className="text-lg font-bold text-slate-800">Objects Go to Heap</h4>
                      </div>
                      <div className="ml-11">
                        <p className="text-slate-600 text-sm mb-2">When you create objects:</p>
                        <div className="bg-slate-50 p-3 rounded font-mono text-sm mb-2">
                          Person p1 = new Person("Alice", 25);
                        </div>
                        <div className="bg-purple-50 p-3 rounded text-sm">
                          The actual object with data (name="Alice", age=25) goes to <strong>Heap Memory</strong>, 
                          not Metaspace!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visual Flow */}
                <div className="bg-slate-100 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">🔄 Complete Flow</h3>
                  <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    <div className="bg-white p-4 rounded-lg shadow text-center">
                      <div className="text-2xl mb-2">📝</div>
                      <div className="font-bold">Source Code</div>
                      <div className="text-sm text-slate-600">.java file</div>
                    </div>
                    <div className="text-2xl">→</div>
                    <div className="bg-white p-4 rounded-lg shadow text-center">
                      <div className="text-2xl mb-2">⚙️</div>
                      <div className="font-bold">Bytecode</div>
                      <div className="text-sm text-slate-600">.class file</div>
                    </div>
                    <div className="text-2xl">→</div>
                    <div className="bg-green-100 p-4 rounded-lg shadow text-center border-2 border-green-500">
                      <div className="text-2xl mb-2">📚</div>
                      <div className="font-bold text-green-800">Metaspace</div>
                      <div className="text-sm text-green-700">Class metadata</div>
                    </div>
                    <div className="text-2xl">+</div>
                    <div className="bg-purple-100 p-4 rounded-lg shadow text-center border-2 border-purple-500">
                      <div className="text-2xl mb-2">📦</div>
                      <div className="font-bold text-purple-800">Heap</div>
                      <div className="text-sm text-purple-700">Objects</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Architecture */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-slate-800 mb-6">
                  🏗️ Memory Architecture with Metaspace
                </h2>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">The Big Picture</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Java's memory is divided into different areas. Metaspace sits in <strong>Native Memory</strong>, 
                    which is outside the Java Heap. This is the key difference from PermGen!
                  </p>
                </div>

                {/* Complete Memory Diagram */}
                <div className="bg-slate-50 p-6 rounded-xl">
                  <h3 className="text-2xl font-bold text-center text-slate-800 mb-6">
                    Complete JVM Memory Layout (Java 8+)
                  </h3>
                  
                  <div className="space-y-4 max-w-3xl mx-auto">
                    {/* JVM Memory Container */}
                    <div className="border-4 border-slate-800 rounded-xl p-4 bg-white">
                      <div className="text-center font-bold text-slate-800 mb-4 text-xl">
                        JVM Memory
                      </div>

                      {/* Java Heap */}
                      <div className="bg-gradient-to-r from-blue-100 to-blue-200 border-3 border-blue-500 rounded-lg p-4 mb-4">
                        <div className="font-bold text-blue-900 text-lg mb-3 text-center">
                          Java Heap Memory
                        </div>
                        
                        <div className="space-y-2">
                          {/* Young Generation */}
                          <div className="bg-blue-300 p-3 rounded">
                            <div className="font-semibold text-blue-900 mb-2">Young Generation</div>
                            <div className="grid grid-cols-3 gap-2 text-sm">
                              <div className="bg-blue-400 p-2 rounded text-center text-white">Eden</div>
                              <div className="bg-blue-400 p-2 rounded text-center text-white">S0</div>
                              <div className="bg-blue-400 p-2 rounded text-center text-white">S1</div>
                            </div>
                          </div>

                          {/* Old Generation */}
                          <div className="bg-blue-400 p-3 rounded">
                            <div className="font-semibold text-white">Old Generation (Tenured)</div>
                            <div className="text-sm text-blue-100 mt-1">Long-lived objects</div>
                          </div>

                          {/* What's stored in heap */}
                          <div className="bg-green-100 p-3 rounded border-2 border-green-500">
                            <div className="font-semibold text-green-900 mb-1">Stored in Heap:</div>
                            <div className="text-sm text-green-800 space-y-1">
                              <div>✓ All objects (instances)</div>
                              <div>✓ Arrays</div>
                              <div>✓ String pool (from Java 8)</div>
                              <div>✓ Static variables (from Java 8)</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Native Memory */}
                      <div className="bg-gradient-to-r from-slate-100 to-slate-200 border-3 border-slate-500 rounded-lg p-4">
                        <div className="font-bold text-slate-900 text-lg mb-3 text-center">
                          Native Memory (Outside Heap)
                        </div>
                        
                        <div className="space-y-3">
                          {/* Metaspace - The Star */}
                          <div className="bg-gradient-to-r from-green-200 to-green-300 p-4 rounded-lg border-3 border-green-600 shadow-lg">
                            <div className="flex items-center justify-between mb-2">
                              <div className="font-bold text-green-900 text-lg">⭐ Metaspace</div>
                              <div className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                                Auto-Grows!
                              </div>
                            </div>
                            <div className="text-sm text-green-900 space-y-1 mb-2">
                              <div>📦 Class metadata</div>
                              <div>📝 Method information</div>
                              <div>🔧 Field descriptors</div>
                              <div>💾 Constant pool</div>
                              <div>⚙️ Bytecode</div>
                            </div>
                            <div className="bg-green-400 p-2 rounded text-xs text-green-900">
                              <strong>Size:</strong> Starts small, grows as needed up to MaxMetaspaceSize (or unlimited)
                            </div>
                          </div>

                          {/* Other Native Memory */}
                          <div className="bg-slate-300 p-3 rounded">
                            <div className="font-semibold text-slate-900">Other Native Memory</div>
                            <div className="text-sm text-slate-700 mt-1 space-y-1">
                              <div>• Thread stacks</div>
                              <div>• JIT compiled code</div>
                              <div>• Direct ByteBuffers</div>
                              <div>• JNI code</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Comparison Visual */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-red-800 mb-3 text-center">❌ Old Way (Java 7)</h4>
                    <div className="bg-red-50 p-4 rounded-xl border-2 border-red-300">
                      <div className="space-y-2">
                        <div className="bg-blue-200 p-3 rounded text-center">
                          <div className="font-bold">Heap</div>
                          <div className="text-sm">Young + Old</div>
                        </div>
                        <div className="bg-red-300 p-3 rounded text-center border-2 border-red-500">
                          <div className="font-bold">PermGen</div>
                          <div className="text-xs">Fixed 64MB</div>
                          <div className="text-xs mt-1">Inside Heap 😟</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-green-800 mb-3 text-center">✅ New Way (Java 8+)</h4>
                    <div className="bg-green-50 p-4 rounded-xl border-2 border-green-300">
                      <div className="space-y-2 mb-2">
                        <div className="bg-blue-200 p-3 rounded text-center">
                          <div className="font-bold">Heap</div>
                          <div className="text-sm">Young + Old</div>
                          <div className="text-xs text-green-700 mt-1">+ Strings + Statics</div>
                        </div>
                      </div>
                      <div className="border-t-2 border-green-400 pt-2">
                        <div className="bg-green-300 p-3 rounded text-center border-2 border-green-600">
                          <div className="font-bold">Metaspace</div>
                          <div className="text-xs">Auto-size</div>
                          <div className="text-xs mt-1">Native Memory 😊</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg">
                  <h4 className="font-bold text-purple-900 mb-2">🎯 Key Takeaway</h4>
                  <p className="text-slate-700">
                    By moving Metaspace to native memory, Java can allocate as much space as needed for class metadata, 
                    while keeping the heap clean for actual objects. It's like separating the library catalog (Metaspace) 
                    from the reading rooms (Heap)!
                  </p>
                </div>
              </div>
            )}

            {/* Step 4: Configuration */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-slate-800 mb-6">
                  ⚙️ Configuring & Tuning Metaspace
                </h2>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Good News!</h3>
                  <p className="text-slate-700 leading-relaxed">
                    For most applications, you don't need to configure Metaspace at all! 
                    It handles itself automatically. But if you want to fine-tune...
                  </p>
                </div>

                {/* JVM Flags */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-slate-800">JVM Configuration Flags</h3>

                  <div className="bg-white border-2 border-blue-300 rounded-xl p-5 shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">🎯</span>
                      <h4 className="text-lg font-bold text-slate-800">-XX:MetaspaceSize</h4>
                    </div>
                    <div className="ml-11 space-y-2">
                      <div className="bg-slate-50 p-3 rounded font-mono text-sm">
                        -XX:MetaspaceSize=128m
                      </div>
                      <p className="text-sm text-slate-600">
                        <strong>What it does:</strong> Sets the initial size of Metaspace
                      </p>
                      <p className="text-sm text-slate-600">
                        <strong>When to use:</strong> If you know your app loads many classes at startup, 
                        set this higher to avoid early resizing
                      </p>
                      <div className="bg-yellow-50 p-3 rounded text-sm">
                        <strong>Default:</strong> ~21 MB (platform dependent)
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-green-300 rounded-xl p-5 shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">🔒</span>
                      <h4 className="text-lg font-bold text-slate-800">-XX:MaxMetaspaceSize</h4>
                    </div>
                    <div className="ml-11 space-y-2">
                      <div className="bg-slate-50 p-3 rounded font-mono text-sm">
                        -XX:MaxMetaspaceSize=512m
                      </div>
                      <p className="text-sm text-slate-600">
                        <strong>What it does:</strong> Sets the maximum size limit for Metaspace
                      </p>
                      <p className="text-sm text-slate-600">
                        <strong>When to use:</strong> To prevent runaway memory usage in case of class loading leaks
                      </p>
                      <div className="bg-yellow-50 p-3 rounded text-sm">
                        <strong>Default:</strong> Unlimited (limited only by available system memory)
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-purple-300 rounded-xl p-5 shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">📊</span>
                      <h4 className="text-lg font-bold text-slate-800">-XX:MinMetaspaceFreeRatio</h4>
                    </div>
                    <div className="ml-11 space-y-2">
                      <div className="bg-slate-50 p-3 rounded font-mono text-sm">
                        -XX:MinMetaspaceFreeRatio=40
                      </div>
                      <p className="text-sm text-slate-600">
                        <strong>What it does:</strong> Minimum percentage of free space after GC
                      </p>
                      <p className="text-sm text-slate-600">
                        If free space falls below this after GC, Metaspace will grow
                      </p>
                    </div>
                  </div>
                </div>

                {/* Practical Examples */}
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-slate-800 mb-4">💼 Practical Scenarios</h3>

                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                      <h4 className="font-bold text-green-800 mb-2">✅ Scenario 1: Small Application</h4>
                      <p className="text-sm text-slate-600 mb-2">Simple Spring Boot app with ~500 classes</p>
                      <div className="bg-green-50 p-3 rounded font-mono text-xs">
                        # No configuration needed!<br/>
                        # Let it auto-manage
                      </div>
                      <p className="text-sm text-slate-600 mt-2">
                        Expected Metaspace usage: ~40-80 MB
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-bold text-blue-800 mb-2">📘 Scenario 2: Medium Application</h4>
                      <p className="text-sm text-slate-600 mb-2">Enterprise app with many dependencies (~2000 classes)</p>
                      <div className="bg-blue-50 p-3 rounded font-mono text-xs">
                        -XX:MetaspaceSize=128m<br/>
                        -XX:MaxMetaspaceSize=512m
                      </div>
                      <p className="text-sm text-slate-600 mt-2">
                        Expected Metaspace usage: ~150-250 MB
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
                      <h4 className="font-bold text-purple-800 mb-2">🚀 Scenario 3: Large Application</h4>
                      <p className="text-sm text-slate-600 mb-2">Huge monolith with dynamic class loading (~5000+ classes)</p>
                      <div className="bg-purple-50 p-3 rounded font-mono text-xs">
                        -XX:MetaspaceSize=256m<br/>
                        -XX:MaxMetaspaceSize=1024m
                      </div>
                      <p className="text-sm text-slate-600 mt-2">
                        Expected Metaspace usage: ~300-600 MB
                      </p>
                    </div>
                  </div>
                </div>

                {/* Monitoring */}
                <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-yellow-900 mb-4">📈 Monitoring Metaspace</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-yellow-900 mb-1">Using JConsole/VisualVM:</h4>
                      <p className="text-sm text-slate-700">
                        Look for "Metaspace" in the memory tab to see current usage and capacity
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-yellow-900 mb-1">Using JVM flags:</h4>
                      <div className="bg-white p-3 rounded font-mono text-xs">
                        -XX:+PrintGCDetails -XX:+PrintGCDateStamps
                      </div>
                      <p className="text-sm text-slate-700 mt-1">
                        Shows Metaspace info during garbage collection
                      </p>
                    </div>
                  </div>
                </div>

                {/* Common Issues */}
                <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
                  <h4 className="font-bold text-red-900 mb-3">⚠️ Common Issues & Solutions</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong className="text-red-800">Issue:</strong> OutOfMemoryError: Metaspace<br/>
                      <strong className="text-green-800">Solution:</strong> Increase MaxMetaspaceSize or check for class loading memory leaks
                    </div>
                    <div>
                      <strong className="text-red-800">Issue:</strong> Metaspace growing continuously<br/>
                      <strong className="text-green-800">Solution:</strong> Look for classloader leaks (common with hot-deploy frameworks)
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t-2 border-slate-200">
              <button
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  currentStep === 0
                    ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                ← Previous
              </button>
              <button
                onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
                disabled={currentStep === steps.length - 1}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  currentStep === steps.length - 1
                    ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
