/**
 * Keystone Remote Notary — K.A.T.E. Floating Assistant & Document Dropzone Loader
 * Embeds directly into keystoneremotenotary.com
 */
(function() {
  const KATE_APP_URL = window.KRN_AGENT_URL || 'https://krn-kate-agent.us-central1.run.app';

  function injectKateWidget() {
    if (document.getElementById('kate-widget-container')) return;

    const container = document.createElement('div');
    container.id = 'kate-widget-container';
    container.innerHTML = `
      <div id="kate-chat-window" class="hidden fixed bottom-20 right-4 sm:right-6 w-[92vw] sm:w-[410px] h-[560px] max-h-[80vh] bg-[#0A0E17] border-2 border-[#D97706] rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden">
        <div class="bg-[#0F172A] border-b border-slate-800 px-4 py-3 flex items-center justify-between">
          <div class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded bg-[#D97706] text-slate-950 font-bold font-mono flex items-center justify-center text-sm">K</div>
            <div>
              <div class="text-xs font-bold text-white font-mono uppercase tracking-wider">K.A.T.E. // Compliance & Intake</div>
              <div class="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                PA Commission #1467234 • Online
              </div>
            </div>
          </div>
          <button onclick="window.toggleKateChat()" class="text-slate-400 hover:text-white text-lg font-bold px-2">&times;</button>
        </div>
        <iframe id="kate-iframe" src="${KATE_APP_URL}" class="w-full flex-1 border-0" allow="camera; microphone; clipboard-write"></iframe>
      </div>

      <button
        id="kate-toggle-btn"
        onclick="window.toggleKateChat()"
        aria-label="Open K.A.T.E. Notary & I-9 Assistant"
        class="fixed bottom-16 md:bottom-6 right-4 sm:right-6 z-50 px-4 py-3 rounded-full bg-gradient-to-r from-[#D97706] to-[#F59E0B] text-slate-950 font-extrabold text-xs font-mono uppercase tracking-wider shadow-xl hover:scale-105 transition flex items-center gap-2 border border-amber-300"
      >
        <span>💬 Ask K.A.T.E. / Upload ID</span>
      </button>
    `;
    document.body.appendChild(container);
  }

  window.toggleKateChat = function(serviceIntent) {
    const win = document.getElementById('kate-chat-window');
    const iframe = document.getElementById('kate-iframe');
    if (!win) return;
    if (serviceIntent && iframe) {
      iframe.src = `${KATE_APP_URL}?intent=${encodeURIComponent(serviceIntent)}`;
    }
    win.classList.toggle('hidden');
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectKateWidget);
  } else {
    injectKateWidget();
  }
})();
