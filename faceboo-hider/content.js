function hideReels() {
  const reels = document.querySelectorAll('[aria-label="Reels"], a[href*="reels"]');
  reels.forEach(el => {
    el.style.display = "none";
  });
}

function hidePosts() {
  const blockedWords = ["giveaway", "crypto"]; // you can add more word here based on your preference
  const posts = document.querySelectorAll('div[role="article"]');

  posts.forEach(post => {
    const text = post.innerText.toLowerCase();
    if (blockedWords.some(word => text.includes(word))) {
      post.style.display = "none";
    }
  });
}

const observer = new MutationObserver(() => {
  hideReels();
  hidePosts();
});

observer.observe(document.body, { childList: true, subtree: true });

hideReels();
hidePosts();
