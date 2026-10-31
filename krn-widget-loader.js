/**
 * Keystone Remote Notary — KATE Virtual Concierge Widget Loader
 * Production Endpoint: https://krn-kate-agent-16289276837.us-central1.run.app
 */
(function() {
  var KATE_APP_URL = window.KRN_AGENT_URL || 'https://krn-kate-agent-16289276837.us-central1.run.app';

  function injectKateWidget() {
    if (document.getElementById('kate-widget-container')) return;

    var container = document.createElement('div');
    container.id = 'kate-widget-container';
    container.innerHTML =
      '<div id="kate-chat-window" class="hidden fixed bottom-20 right-4 sm:right-6 w-[94vw] sm:w-[420px] h-[590px] max-h-[84dvh] bg-[#F3EFE5] border-2 border-[#C3A36A] rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden" style="box-shadow: 0 20px 45px rgba(23, 46, 70, 0.35);">' +
        '<iframe id="kate-iframe" src="' + KATE_APP_URL + '" class="w-full h-full border-0" allow="clipboard-write"></iframe>' +
      '</div>' +
      '<button id="kate-toggle-btn" onclick="window.toggleKateChat()" aria-label="Chat with KATE, Keystone Virtual Concierge" class="fixed bottom-5 right-4 sm:right-6 z-50 px-5 py-3.5 rounded-full bg-[#172E46] hover:bg-[#0F2032] text-white font-semibold text-xs sm:text-sm tracking-wide shadow-xl hover:scale-105 transition-all flex items-center gap-2.5 border-2 border-[#C3A36A] cursor-pointer">' +
        '<span class="w-2 h-2 rounded-full bg-emerald-400"></span>' +
        '<span>Chat with KATE &middot; Virtual Concierge</span>' +
      '</button>';
    document.body.appendChild(container);

    // Listen for close message from the iframe
    window.addEventListener('message', function(e) {
      if (e.data && e.data.type === 'CLOSE_KATE') {
        var win = document.getElementById('kate-chat-window');
        if (win) win.classList.add('hidden');
      }
    });
  }

  window.toggleKateChat = function(servicePrompt) {
    var win = document.getElementById('kate-chat-window');
    var iframe = document.getElementById('kate-iframe');
    if (!win) return;
    if (servicePrompt && iframe) {
      var sep = KATE_APP_URL.indexOf('?') !== -1 ? '&' : '?';
      iframe.src = KATE_APP_URL + sep + 'intent=' + encodeURIComponent(servicePrompt);
      win.classList.remove('hidden');
      return;
    }
    win.classList.toggle('hidden');
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectKateWidget);
  } else {
    injectKateWidget();
  }
})();
