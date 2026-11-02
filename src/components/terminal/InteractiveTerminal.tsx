import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, Trash2, Maximize2, Minimize2 } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { skills } from '@/data/skills';
import { services } from '@/data/services';
import { projects } from '@/data/projects';
import { experiences } from '@/data/experience';
import { useTheme } from '@/context/ThemeContext';

interface TerminalLog {
  id: string;
  type: 'input' | 'output' | 'system' | 'error';
  text: React.ReactNode;
}

export const InteractiveTerminal: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [isExpanded, setIsExpanded] = useState(false);

  const [logs, setLogs] = useState<TerminalLog[]>([
    {
      id: 'init-1',
      type: 'system',
      text: (
        <div>
          <span className="text-[#9B6DFF] font-bold">Oracle APEX Environment Shell [Version 24.1.0]</span>
          <br />
          <span className="text-gray-400">Type </span>
          <span className="text-[#00D4FF] font-bold font-mono">help</span>
          <span className="text-gray-400"> to list available commands.</span>
        </div>
      ),
    },
  ]);

  const logsContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const isInitialMount = useRef(true);

  useEffect(() => {
    // Only scroll the internal container when new logs are added, never on initial mount
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    if (logsContainerRef.current) {
      logsContainerRef.current.scrollTop = logsContainerRef.current.scrollHeight;
    }
  }, [logs]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    // Add to history
    setHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    const newLogs: TerminalLog[] = [
      ...logs,
      {
        id: `in-${Date.now()}`,
        type: 'input',
        text: trimmed,
      },
    ];

    const lower = trimmed.toLowerCase();

    switch (lower) {
      case 'help':
        newLogs.push({
          id: `out-${Date.now()}`,
          type: 'output',
          text: (
            <div className="space-y-1 text-gray-300">
              <div className="text-[#00D4FF] font-semibold">Available commands:</div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 font-mono text-xs">
                <div><span className="text-[#9B6DFF] font-bold">about</span> - Developer summary</div>
                <div><span className="text-[#9B6DFF] font-bold">skills</span> - Curated technology stack</div>
                <div><span className="text-[#9B6DFF] font-bold">projects</span> - Production applications</div>
                <div><span className="text-[#9B6DFF] font-bold">services</span> - Core engineering services</div>
                <div><span className="text-[#9B6DFF] font-bold">experience</span> - Work &amp; education</div>
                <div><span className="text-[#9B6DFF] font-bold">contact</span> - Business inquiry info</div>
                <div><span className="text-[#9B6DFF] font-bold">theme</span> - Toggle light/dark UI</div>
                <div><span className="text-[#9B6DFF] font-bold">clear</span> - Clear terminal buffer</div>
              </div>
            </div>
          ),
        });
        break;

      case 'about':
        newLogs.push({
          id: `out-${Date.now()}`,
          type: 'output',
          text: (
            <div className="space-y-2 text-gray-300">
              <div className="text-white font-bold">{siteConfig.name} — {siteConfig.title}</div>
              <p className="text-xs text-gray-400 leading-relaxed">
                {siteConfig.about.paragraphs[0]}
              </p>
              <div className="text-[11px] text-[#00D4FF]">
                Current Base: {siteConfig.location} | Status: {siteConfig.availability}
              </div>
            </div>
          ),
        });
        break;

      case 'skills':
        newLogs.push({
          id: `out-${Date.now()}`,
          type: 'output',
          text: (
            <div className="space-y-2 text-gray-300">
              <div className="text-[#00D4FF] font-semibold">Core Technical Stack:</div>
              <div className="text-xs leading-relaxed">
                <span className="text-white font-bold">Oracle Ecosystem:</span> Oracle APEX, Oracle Database, SQL, PL/SQL, ORDS, BI Publisher, Interactive Reports &amp; Grids.
              </div>
              <div className="text-xs leading-relaxed">
                <span className="text-white font-bold">Frontend:</span> JavaScript, React.js, Tailwind CSS, HTML5, CSS3, jQuery.
              </div>
              <div className="text-xs leading-relaxed">
                <span className="text-white font-bold">Backend &amp; Integrations:</span> REST APIs, JSON, Python, PostgreSQL, OCI Object Storage, Razorpay, Stripe.
              </div>
            </div>
          ),
        });
        break;

      case 'projects':
        newLogs.push({
          id: `out-${Date.now()}`,
          type: 'output',
          text: (
            <div className="space-y-1.5 text-gray-300">
              <div className="text-[#00D4FF] font-semibold">Selected Production Deployments:</div>
              {projects.slice(0, 5).map((p) => (
                <div key={p.id} className="text-xs flex items-center justify-between">
                  <span className="text-white font-medium">#{p.number} {p.title}</span>
                  <span className="text-gray-400 font-mono text-[11px]">[{p.category}]</span>
                </div>
              ))}
              <div className="text-[11px] text-[#9B6DFF] pt-1">
                Run scroll to #projects section to inspect complete interactive mockups.
              </div>
            </div>
          ),
        });
        break;

      case 'services':
        newLogs.push({
          id: `out-${Date.now()}`,
          type: 'output',
          text: (
            <div className="space-y-1.5 text-gray-300">
              <div className="text-[#00D4FF] font-semibold">Client Engineering Services:</div>
              {services.map((s) => (
                <div key={s.id} className="text-xs">
                  <span className="text-[#9B6DFF] font-bold">{s.number}.</span>{' '}
                  <span className="text-white">{s.title}</span>
                </div>
              ))}
            </div>
          ),
        });
        break;

      case 'experience':
        newLogs.push({
          id: `out-${Date.now()}`,
          type: 'output',
          text: (
            <div className="space-y-2 text-gray-300">
              <div className="text-[#00D4FF] font-semibold">Professional History:</div>
              {experiences.map((exp) => (
                <div key={exp.id} className="text-xs">
                  <div className="text-white font-bold">{exp.title} - {exp.organization}</div>
                  <div className="text-gray-400 font-mono text-[11px]">{exp.period} | {exp.location}</div>
                </div>
              ))}
            </div>
          ),
        });
        break;

      case 'contact':
        newLogs.push({
          id: `out-${Date.now()}`,
          type: 'output',
          text: (
            <div className="space-y-1.5 text-gray-300">
              <div className="text-[#00D4FF] font-semibold">Direct Communication Channels:</div>
              <div className="text-xs">
                Email: <span className="text-white font-mono">{siteConfig.email}</span>
              </div>
              <div className="text-xs">
                Phone: <span className="text-white font-mono">{siteConfig.phonePlaceholder}</span>
              </div>
              <div className="text-xs">
                Location: <span className="text-white">{siteConfig.location}</span>
              </div>
            </div>
          ),
        });
        break;

      case 'clear':
        setLogs([]);
        setInputVal('');
        return;

      case 'theme':
        toggleTheme();
        newLogs.push({
          id: `out-${Date.now()}`,
          type: 'output',
          text: (
            <span className="text-emerald-400">
              Theme switched to {theme === 'dark' ? 'light' : 'dark'} mode.
            </span>
          ),
        });
        break;

      case 'whoami':
        newLogs.push({
          id: `out-${Date.now()}`,
          type: 'output',
          text: <span className="text-[#00D4FF]">guest@apex-terminal</span>,
        });
        break;

      case 'date':
        newLogs.push({
          id: `out-${Date.now()}`,
          type: 'output',
          text: <span className="text-gray-300">{new Date().toUTCString()}</span>,
        });
        break;

      case 'sudo':
        newLogs.push({
          id: `out-${Date.now()}`,
          type: 'error',
          text: <span className="text-red-400">Permission denied: user 'guest' is not in sudoers file.</span>,
        });
        break;

      default:
        newLogs.push({
          id: `err-${Date.now()}`,
          type: 'error',
          text: (
            <div>
              <span className="text-red-400">bash: command not found: {trimmed}. </span>
              <span className="text-gray-400">Type </span>
              <span className="text-[#00D4FF] font-bold">help</span>
              <span className="text-gray-400"> for available commands.</span>
            </div>
          ),
        });
        break;
    }

    setLogs(newLogs);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length > 0) {
        const nextIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIndex);
        setInputVal(history[nextIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const nextIndex = historyIndex + 1;
        if (nextIndex < history.length) {
          setHistoryIndex(nextIndex);
          setInputVal(history[nextIndex]);
        } else {
          setHistoryIndex(-1);
          setInputVal('');
        }
      }
    }
  };

  return (
    <section id="terminal" className="py-24 relative overflow-hidden bg-theme-bg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-gradient-to-r from-[#9B6DFF] to-[#00D4FF]" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00D4FF]">
              CLI Interface
            </span>
            <span className="w-8 h-[2px] bg-gradient-to-r from-[#00D4FF] to-[#9B6DFF]" />
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-theme-primary tracking-tight">
            Developer Terminal.
          </h2>
          <p className="text-sm sm:text-base text-theme-muted mt-3">
            Prefer a keyboard-driven workflow? Query portfolio endpoints directly via the interactive shell.
          </p>
        </div>

        {/* Terminal Window Container */}
        <div
          className={`rounded-2xl border border-white/10 bg-[#08090D] shadow-2xl overflow-hidden font-mono transition-all duration-300 ${
            isExpanded ? 'min-h-[580px]' : 'min-h-[420px]'
          }`}
          onClick={() => inputRef.current?.focus()}
        >
          {/* Header Bar */}
          <div className="px-4 py-3 bg-[#10121A] border-b border-white/10 flex items-center justify-between select-none">
            {/* Window Controls */}
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={() => setLogs([])} title="Clear screen" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)} title="Resize" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-3 text-xs text-gray-400 flex items-center gap-2">
                <TerminalIcon className="w-3.5 h-3.5 text-[#00D4FF]" />
                <span>jenish@portfolio:~</span>
              </span>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLogs([]);
                }}
                className="p-1 rounded text-gray-400 hover:text-white transition-colors"
                title="Clear Terminal"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(!isExpanded);
                }}
                className="p-1 rounded text-gray-400 hover:text-white transition-colors"
                title="Toggle Size"
              >
                {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Terminal Screen & Logs */}
          <div ref={logsContainerRef} className="p-4 sm:p-6 space-y-3.5 text-xs sm:text-sm text-gray-200 overflow-y-auto max-h-[460px]">
            {logs.map((log) => (
              <div key={log.id} className="leading-relaxed">
                {log.type === 'input' ? (
                  <div className="flex items-center gap-2 text-white">
                    <span className="text-[#00D4FF] font-bold">jenish@portfolio:~$</span>
                    <span className="font-semibold">{log.text}</span>
                  </div>
                ) : (
                  <div className="pl-4 border-l border-white/10">{log.text}</div>
                )}
              </div>
            ))}

            {/* Current Active Input Prompt Line */}
            <div className="flex items-center gap-2 text-white pt-1">
              <span className="text-[#00D4FF] font-bold shrink-0">jenish@portfolio:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type 'help' or command..."
                className="w-full bg-transparent border-none outline-none font-mono text-white placeholder-gray-600 focus:ring-0 p-0 text-xs sm:text-sm"
                autoComplete="off"
                spellCheck="false"
              />
              <button
                onClick={() => handleCommand(inputVal)}
                className="shrink-0 p-1 text-gray-400 hover:text-[#00D4FF]"
                title="Execute"
              >
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Quick Command Buttons Bar */}
          <div className="px-4 py-2.5 bg-[#0A0C13] border-t border-white/10 flex flex-wrap items-center gap-2 text-[11px] text-gray-400">
            <span className="text-[10px] uppercase tracking-wider text-gray-500">Quick:</span>
            {['help', 'about', 'skills', 'projects', 'services', 'experience', 'contact', 'clear'].map(
              (c) => (
                <button
                  key={c}
                  onClick={() => handleCommand(c)}
                  className="px-2 py-0.5 rounded bg-white/5 border border-white/10 hover:border-[#00D4FF]/40 hover:text-white transition-colors"
                >
                  {c}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
