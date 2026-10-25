const STORAGE = {
  users: "Recipe Nest_users_v1",
  session: "Recipe Nest_session_v1",
  saved: "Recipe Nest_saved_v1",
  custom: "Recipe Nest_custom_v1",
  ratings: "Recipe Nest_ratings_v1"
};

const starterRecipes = [
  {id:"r1",name:"Creamy Tomato Basil Pasta",cuisine:"Italian",diet:"Vegetarian",time:25,category:"Quick",rating:4.9,ratings:128,emoji:"🍝",image:"https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80",description:"Silky tomato cream sauce, fresh basil, and pasta make a comforting weeknight favorite.",ingredients:["250 g pasta","2 cups cherry tomatoes","3 garlic cloves, minced","1/3 cup cream","Fresh basil leaves","2 tbsp olive oil","Salt and black pepper"],instructions:["Cook pasta in salted water according to the package. Reserve a cup of pasta water.","Warm olive oil in a pan and sauté garlic for 30 seconds.","Add halved tomatoes and cook until soft, about 8 minutes.","Stir in cream, salt, and pepper. Simmer for 2 minutes.","Toss in pasta and a splash of pasta water. Finish with fresh basil."]},
  {id:"r2",name:"Rainbow Nourish Bowl",cuisine:"Mediterranean",diet:"Vegan",time:20,category:"Quick",rating:4.8,ratings:96,emoji:"🥗",image:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",description:"A colorful, feel-good bowl with crisp vegetables, grains, and a lemony dressing.",ingredients:["1 cup cooked quinoa","1 cucumber, sliced","1 cup cherry tomatoes","1 avocado","1/2 cup chickpeas","2 tbsp lemon juice","2 tbsp olive oil"],instructions:["Divide cooked quinoa between two bowls.","Arrange cucumber, tomatoes, avocado, and chickpeas over the quinoa.","Whisk lemon juice, olive oil, salt, and pepper.","Drizzle dressing over the bowls and serve fresh."]},
  {id:"r3",name:"Golden Butter Chickpeas",cuisine:"Indian",diet:"Vegan",time:30,category:"Comfort",rating:4.9,ratings:174,emoji:"🍛",image:"https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",description:"Tender chickpeas simmered in a warmly spiced tomato gravy. Perfect with rice or naan.",ingredients:["2 cans chickpeas, drained","1 onion, diced","3 garlic cloves","1 tbsp grated ginger","1 cup tomato purée","1 tsp garam masala","1 tsp cumin","1/2 cup coconut milk"],instructions:["Sauté onion in a little oil until golden.","Add garlic, ginger, cumin, and garam masala; cook for 1 minute.","Pour in tomato purée and simmer for 8 minutes.","Stir in chickpeas and coconut milk.","Simmer for 10 minutes, season to taste, and serve with rice."]},
  {id:"r4",name:"Berry Breakfast Pancakes",cuisine:"American",diet:"Vegetarian",time:20,category:"Dessert",rating:4.7,ratings:82,emoji:"🥞",image:"https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=800&q=80",description:"Fluffy golden pancakes topped with juicy berries and a little maple syrup.",ingredients:["1 cup all-purpose flour","1 tbsp sugar","1 tsp baking powder","3/4 cup milk","1 egg","1 tbsp melted butter","Fresh berries","Maple syrup"],instructions:["Mix flour, sugar, and baking powder in a bowl.","Whisk milk, egg, and melted butter separately.","Fold wet ingredients into dry ingredients until just combined.","Cook small scoops on a lightly greased pan until bubbles form; flip and cook until golden.","Serve warm with berries and maple syrup."]},
  {id:"r5",name:"Sesame Ginger Noodle Bowl",cuisine:"Asian",diet:"Vegan",time:18,category:"Quick",rating:4.8,ratings:109,emoji:"🍜",image:"https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",description:"Slurp-worthy noodles tossed in a zingy sesame-ginger sauce with crunchy vegetables.",ingredients:["200 g noodles","1 carrot, julienned","1 bell pepper, sliced","2 tbsp soy sauce","1 tbsp sesame oil","1 tsp grated ginger","1 tsp maple syrup","Sesame seeds and spring onion"],instructions:["Cook noodles according to the package and drain.","Whisk soy sauce, sesame oil, ginger, and maple syrup.","Quickly stir-fry the vegetables until just tender.","Add noodles and sauce; toss over medium heat for 1–2 minutes.","Top with sesame seeds and spring onion."]},
  {id:"r6",name:"Roasted Tomato Toast",cuisine:"Mediterranean",diet:"Vegetarian",time:15,category:"Quick",rating:4.6,ratings:63,emoji:"🍅",image:"https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",description:"Crisp sourdough piled with juicy tomatoes, herbs, and creamy whipped ricotta.",ingredients:["2 slices sourdough","1 cup cherry tomatoes","1/2 cup ricotta","1 tbsp olive oil","Fresh thyme or basil","Salt and pepper"],instructions:["Toss tomatoes with olive oil, salt, and pepper.","Roast at 220°C for 10–12 minutes until blistered.","Toast sourdough until crisp.","Spread ricotta over toast and pile on roasted tomatoes.","Finish with fresh herbs and a little olive oil."]},
  {id:"r7",name:"Smoky Bean Tacos",cuisine:"Mexican",diet:"Vegan",time:22,category:"Comfort",rating:4.8,ratings:91,emoji:"🌮",image:"https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=800&q=80",description:"",ingredients:[],instructions:[]},
  {id:"r8",name:"Chocolate Lava Cups",cuisine:"French",diet:"Vegetarian",time:28,category:"Dessert",rating:4.9,ratings:143,emoji:"🍫",image:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",description:"Rich little chocolate cakes with a warm, gooey center. Made for sharing.",ingredients:["100 g dark chocolate","80 g butter","2 eggs","1/4 cup sugar","2 tbsp flour","Butter for ramekins"],instructions:["Heat oven to 200°C and butter two small ramekins.","Melt chocolate and butter together; cool slightly.","Whisk eggs and sugar until pale, then fold in chocolate.","Fold in flour and divide between ramekins.","Bake 9–11 minutes until edges are set but centers remain soft. Rest 1 minute and serve."]}
];
// Correct recipe data kept separate so the starter list remains easy to edit.
starterRecipes[6] = {id:"r7",name:"Smoky Black Bean Tacos",cuisine:"Mexican",diet:"Vegan",time:22,category:"Comfort",rating:4.8,ratings:91,emoji:"🌮",image:"https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=800&q=80",description:"Smoky black beans, crunchy cabbage, and lime bring a fresh twist to taco night.",ingredients:["1 can black beans, drained","1 tsp smoked paprika","1/2 tsp cumin","6 small tortillas","1 cup shredded cabbage","1 avocado","1 lime","Fresh coriander"],instructions:["Warm beans in a pan with paprika, cumin, and a splash of water.","Heat tortillas in a dry skillet.","Fill each tortilla with beans and shredded cabbage.","Top with avocado, coriander, and a squeeze of lime."]};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const readStore = (key, fallback) => { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } };
const writeStore = (key, value) => localStorage.setItem(key, JSON.stringify(value));
let activeCategory = "All";
let activeCollection = false;
let authMode = "login";
let toastTimer;
let currentDetailId = null;

function currentUser() {
  const email = readStore(STORAGE.session, null);
  return email ? readStore(STORAGE.users, []).find(user => user.email === email) || null : null;
}
function allRecipes() { return [...starterRecipes, ...readStore(STORAGE.custom, [])]; }
function savedIds() {
  const user = currentUser();
  return user ? readStore(STORAGE.saved, {})[user.email] || [] : [];
}
function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[char]));
}
function refreshAuthUI() {
  const user = currentUser();
  document.body.classList.toggle("auth-locked", !user);
  $("#authButton").classList.toggle("hidden", !!user);
  $("#logoutButton").classList.toggle("hidden", !user);
  $("#logoutButton").textContent = "Log out";
  $("#shareHint").textContent = user ? `Signed in as ${user.name}. Your recipe will be saved in this browser.` : "Create an account or log in to unlock Recipe Nest.";
  if (user) {
    $("#authModal").classList.add("hidden");
  } else {
    $("#authModal").classList.remove("hidden");
    setAuthMode("login");
  }
  renderRecipes();
}
function openAuth(mode = "login") {
  setAuthMode(mode);
  $("#authMessage").textContent = "";
  $("#authModal").classList.remove("hidden");
}
function closeModal(id) { if (id === "authModal" && !currentUser()) return; $("#" + id).classList.add("hidden"); }
function setAuthMode(mode) {
  authMode = mode;
  $$(".auth-tab").forEach(tab => tab.classList.toggle("active", tab.dataset.mode === mode));
  $("#nameField").classList.toggle("hidden", mode !== "signup");
  $("#nameField input").required = mode === "signup";
  $("#authTitle").textContent = mode === "login" ? "Welcome back." : "Join the table.";
  $("#authSubtitle").textContent = mode === "login" ? "Your next favorite recipe is waiting." : "Create an account to save and share recipes.";
  $("#authSubmit").innerHTML = mode === "login" ? "Log in <span>↗</span>" : "Create account <span>↗</span>";
  $("#authMessage").textContent = "";
  $("#authForm").elements.password.autocomplete = mode === "login" ? "current-password" : "new-password";
}
function renderRecipes() {
  const query = $("#searchInput").value.trim().toLowerCase();
  const cuisine = $("#cuisineFilter").value;
  const diet = $("#dietFilter").value;
  const saved = savedIds();
  let recipes = allRecipes().filter(recipe => {
    const haystack = [recipe.name, recipe.cuisine, recipe.diet, recipe.description, ...(recipe.ingredients || [])].join(" ").toLowerCase();
    const matchesSearch = !query || haystack.includes(query);
    const matchesCuisine = !cuisine || recipe.cuisine === cuisine;
    const matchesDiet = !diet || recipe.diet === diet;
    const matchesCategory = activeCategory === "All" || (activeCategory === "Vegetarian" ? recipe.diet === "Vegetarian" : activeCategory === "Quick" ? recipe.time <= 25 : activeCategory === "Comfort" ? recipe.category === "Comfort" : activeCategory === "Dessert" ? recipe.category === "Dessert" : true);
    const matchesSaved = !activeCollection || saved.includes(recipe.id);
    return matchesSearch && matchesCuisine && matchesDiet && matchesCategory && matchesSaved;
  });
  $("#recipeHeading").textContent = activeCollection ? "Your saved recipes" : activeCategory === "All" ? "Recipes to fall for" : activeCategory === "Quick" ? "Quick & easy favorites" : activeCategory === "Vegetarian" ? "Fresh vegetarian ideas" : activeCategory === "Comfort" ? "Comfort food classics" : "Something sweet";
  $("#resultCount").textContent = `${recipes.length} ${recipes.length === 1 ? "recipe" : "recipes"}`;
  $("#recipeGrid").innerHTML = recipes.map(recipe => `
    <article class="recipe-card" data-open-recipe="${escapeHTML(recipe.id)}" tabindex="0" aria-label="View ${escapeHTML(recipe.name)}">
      <div class="recipe-image-wrap"><img class="recipe-image" src="${escapeHTML(recipe.image)}" alt="${escapeHTML(recipe.name)}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80'">
        <button class="save-button ${saved.includes(recipe.id) ? "saved" : ""}" data-save="${escapeHTML(recipe.id)}" aria-label="${saved.includes(recipe.id) ? "Remove saved recipe" : "Save recipe"}" title="${saved.includes(recipe.id) ? "Remove from collection" : "Save recipe"}">${saved.includes(recipe.id) ? "♥" : "♡"}</button>
      </div>
      <div class="recipe-meta"><span>${escapeHTML(recipe.cuisine.toUpperCase())} · ${Number(recipe.time)} MIN</span><span class="rating">★ ${Number(recipe.rating).toFixed(1)}</span></div>
      <h3>${escapeHTML(recipe.name)}</h3><p>${escapeHTML(recipe.description)}</p>
      <div class="card-tags"><span>${escapeHTML(recipe.diet || "Everyday")}</span><span>${escapeHTML(recipe.category || "Community")}</span></div>
    </article>`).join("");
  $("#emptyState").classList.toggle("hidden", recipes.length !== 0);
  $("#recipeGrid").classList.toggle("hidden", recipes.length === 0);
  $$(".category-chip").forEach(button => button.classList.toggle("active", button.dataset.category === activeCategory));
}
function toggleSave(id) {
  const user = currentUser();
  if (!user) { openAuth("login"); showToast("Log in to save your favorite recipes."); return; }
  const saved = readStore(STORAGE.saved, {});
  const list = saved[user.email] || [];
  const wasSaved = list.includes(id);
  saved[user.email] = wasSaved ? list.filter(item => item !== id) : [...list, id];
  writeStore(STORAGE.saved, saved);
  renderRecipes();
  showToast(wasSaved ? "Removed from your collection." : "Saved to your collection ♥");
}
function openRecipe(id) {
  const recipe = allRecipes().find(item => item.id === id);
  if (!recipe) return;
  currentDetailId = id;
  const saved = savedIds().includes(id);
  const userRatings = readStore(STORAGE.ratings, {});
  const myRating = currentUser() ? (userRatings[currentUser().email] || {})[id] || 0 : 0;
  $("#recipeDetail").innerHTML = `
    <img class="detail-image" src="${escapeHTML(recipe.image)}" alt="${escapeHTML(recipe.name)}">
    <div class="detail-topline"><span>${escapeHTML(recipe.cuisine)}</span><span>•</span><span>⏱ ${Number(recipe.time)} minutes</span><span>•</span><span>★ ${Number(recipe.rating).toFixed(1)} (${Number(recipe.ratings) || 0})</span></div>
    <h2 id="detailTitle">${escapeHTML(recipe.name)}</h2><p class="detail-description">${escapeHTML(recipe.description)}</p>
    <button class="button ${saved ? "button-outline" : "button-dark"}" id="detailSave">${saved ? "♥ Saved to collection" : "♡ Save recipe"}</button>
    <div class="detail-columns"><div><h3>Ingredients</h3><ul>${(recipe.ingredients || []).map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ul></div><div><h3>Let's make it</h3><ol>${(recipe.instructions || []).map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ol></div></div>
    <div class="rating-panel"><h3>Rate this recipe</h3><p class="detail-description">Tried it? Leave a rating for the community.</p><div class="rating-row">${[1,2,3,4,5].map(n => `<button class="rating-star ${n <= myRating ? "selected" : ""}" data-rating="${n}" aria-label="Rate ${n} stars">★</button>`).join("")}</div></div>`;
  $("#recipeModal").classList.remove("hidden");
  $("#detailSave").addEventListener("click", () => { toggleSave(id); openRecipe(id); });
  $$(".rating-star").forEach(button => button.addEventListener("click", () => rateRecipe(id, Number(button.dataset.rating))));
}
function rateRecipe(id, rating) {
  const user = currentUser();
  if (!user) { closeModal("recipeModal"); openAuth("login"); showToast("Log in to rate a recipe."); return; }
  const ratings = readStore(STORAGE.ratings, {});
  ratings[user.email] = ratings[user.email] || {};
  ratings[user.email][id] = rating;
  writeStore(STORAGE.ratings, ratings);
  showToast(`Thanks for your ${rating}-star rating!`);
  openRecipe(id);
}
function submitAuth(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const email = form.elements.email.value.trim().toLowerCase();
  const password = form.elements.password.value;
  const users = readStore(STORAGE.users, []);
  const message = $("#authMessage");
  message.classList.remove("success");
  if (authMode === "signup") {
    const name = form.elements.name.value.trim();
    if (!name) { message.textContent = "Please enter your name."; return; }
    if (users.some(user => user.email === email)) { message.textContent = "An account with this email already exists. Please log in."; return; }
    users.push({name, email, password});
    writeStore(STORAGE.users, users);
    writeStore(STORAGE.session, email);
    closeModal("authModal");
    form.reset();
    refreshAuthUI();
    showToast(`Welcome to Recipe Nest, ${name}!`);
  } else {
    const user = users.find(item => item.email === email && item.password === password);
    if (!user) { message.textContent = "Email or password is incorrect. Try again or create an account."; return; }
    writeStore(STORAGE.session, email);
    closeModal("authModal");
    form.reset();
    refreshAuthUI();
    showToast(`Welcome back, ${user.name}!`);
  }
}
function submitRecipe(event) {
  event.preventDefault();
  const user = currentUser();
  if (!user) { openAuth("login"); showToast("Please log in before publishing a recipe."); return; }
  const form = event.currentTarget;
  const data = new FormData(form);
  const name = String(data.get("name")).trim();
  const ingredients = String(data.get("ingredients")).split("\n").map(item => item.trim()).filter(Boolean);
  const instructions = String(data.get("instructions")).split("\n").map(item => item.trim()).filter(Boolean);
  if (!ingredients.length || !instructions.length) { showToast("Add ingredients and cooking instructions."); return; }
  const custom = readStore(STORAGE.custom, []);
  custom.unshift({
    id:"custom-" + Date.now(), name, cuisine:String(data.get("cuisine")),
    diet:String(data.get("diet")) || "Everyday", time:Number(data.get("time")),
    category:"Community", rating:0, ratings:0, emoji:"🍽️",
    image:"https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    description:`A community recipe shared by ${user.name}.`, ingredients, instructions
  });
  writeStore(STORAGE.custom, custom);
  form.reset();
  activeCollection = false;
  activeCategory = "All";
  $("#searchInput").value = "";
  $("#cuisineFilter").value = "";
  $("#dietFilter").value = "";
  renderRecipes();
  $("#recipeGridSection").scrollIntoView({behavior:"smooth"});
  showToast("Your recipe has been published. Thanks for sharing!");
}
$("#authButton").addEventListener("click", () => openAuth("login"));
$("#logoutButton").addEventListener("click", () => {
  localStorage.removeItem(STORAGE.session);
  activeCollection = false;
  refreshAuthUI();
  showToast("You have logged out.");
});
$("#savedShortcut").addEventListener("click", () => {
  if (!currentUser()) { openAuth("login"); return; }
  activeCollection = true;
  activeCategory = "All";
  $("#searchInput").value = "";
  $("#cuisineFilter").value = "";
  $("#dietFilter").value = "";
  renderRecipes();
  $("#recipeGridSection").scrollIntoView({behavior:"smooth"});
});
$("#viewSaved").addEventListener("click", () => $("#savedShortcut").click());
$("#authForm").addEventListener("submit", submitAuth);
$("#recipeForm").addEventListener("submit", submitRecipe);
$("#searchInput").addEventListener("input", renderRecipes);
$("#cuisineFilter").addEventListener("change", renderRecipes);
$("#dietFilter").addEventListener("change", renderRecipes);
$("#categoryRow").addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  activeCollection = false;
  renderRecipes();
});
$("#clearFilters").addEventListener("click", () => {
  $("#searchInput").value = "";
  $("#cuisineFilter").value = "";
  $("#dietFilter").value = "";
  activeCategory = "All";
  activeCollection = false;
  renderRecipes();
});
$("#recipeGrid").addEventListener("click", event => {
  const saveButton = event.target.closest("[data-save]");
  if (saveButton) { event.stopPropagation(); toggleSave(saveButton.dataset.save); return; }
  const card = event.target.closest("[data-open-recipe]");
  if (card) openRecipe(card.dataset.openRecipe);
});
$("#recipeGrid").addEventListener("keydown", event => {
  if ((event.key === "Enter" || event.key === " ") && event.target.matches("[data-open-recipe]")) {
    event.preventDefault(); openRecipe(event.target.dataset.openRecipe);
  }
});
$$("[data-close]").forEach(button => button.addEventListener("click", () => closeModal(button.dataset.close)));
$$(".modal-backdrop").forEach(backdrop => backdrop.addEventListener("click", event => {
  if (event.target === backdrop) closeModal(backdrop.id);
}));
$$(".auth-tab").forEach(button => button.addEventListener("click", () => setAuthMode(button.dataset.mode)));
document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    if (!currentUser()) { event.preventDefault(); openAuth("login"); return; }
    $$(".modal-backdrop").forEach(modal => modal.classList.add("hidden"));
  }
});
$("#year").textContent = new Date().getFullYear();
refreshAuthUI();
