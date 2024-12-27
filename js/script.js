// Object constructor for store items
function Store(
  id,
  name,
  priceCdn,
  quantity,
  maxPerCust,
  category,
  costShip,
  review,
  description,
  image
) {
  this.id = id;
  this.name = name;
  this.priceCdn = priceCdn;
  this.quantity = quantity;
  this.maxPerCust = maxPerCust;
  this.category = category;
  this.costShip = costShip;
  this.review = review;
  this.description = description;
  this.image = image;
}

// Object constructor for cart items
function Cart(id, priceCdn, quantity, costShip) {
  this.id = id;
  this.priceCdn = priceCdn;
  this.quantity = quantity;
  this.costShip = costShip;
}

// Object constructor for review items
function Review(id, review, rating) {
  this.id = id;
  this.review = review;
  this.rating = rating;
}

// Arrays for store and cart items
var storeItems = [];
var cartItems = [];
var reviewItems = [];

// Function to initialize tables for items in store and cart
function initialize() {
  // Get date and time
  var now = new Date();
  var datetime = now.toLocaleString();

  // Insert date and time into dateArea ID
  document.getElementById("dateArea").innerHTML = datetime;

  // My Inventory
  const item1 = new Store(
    1,
    "Intuition",
    30,
    20,
    3,
    "Instant",
    10,
    "Topgallant careen sutler topsail six pounders gally chandler long clothes trysail swab. Snow fathom cable carouser pirate marooned gun hulk boatswain booty.",
    "Tack keelhaul lee ho hardtack tackle Buccaneer gibbet capstan loaded to the gunwalls.",
    "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=397633&type=card"
  );

  const item2 = new Store(
    2,
    "Rite of Replication",
    22,
    30,
    2,
    "Sorcery",
    10,
    "Parrel Yellow Jack take a caulk main sheet bowsprit chantey barque Arr boatswain provost. Bilged on her anchor tack Sail ho dead men tell no tales lugsail wench brigantine topmast mizzenmast gally.",
    "Cat o'nine tails avast jury mast Barbary Coast killick Pieces of Eight belaying pin wherry black spot spirits.",
    "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=519163&type=card"
  );

  const item3 = new Store(
    3,
    "Steel Overseer",
    15,
    30,
    4,
    "Artifact",
    10,
    "Skysail keelhaul Spanish Main chandler black spot bilge rat spyglass Pirate Round rum Buccaneer. Holystone yo-ho-ho Brethren of the Coast nipperkin line mutiny pirate snow loaded to the gunwalls bilged on her anchor.",
    "Capstan Arr gangplank gaff squiffy black spot Blimey tender knave black jack.",
    "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=653204&type=card"
  );

  const item4 = new Store(
    4,
    "Abaddon the Despoiler",
    51,
    30,
    5,
    "Creature",
    10,
    "Scuppers jib matey dance the hempen jig Sink me reef topgallant tack measured fer yer chains Jolly Roger. Schooner shrouds salmagundi cutlass scuppers lee tender Buccaneer chandler warp.",
    "Parley Davy Jones' Locker fire in the hole Barbary Coast chase dance the hempen jig lugger nipper weigh anchor heave to.",
    "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=580828&type=card"
  );

  const item5 = new Store(
    5,
    "Counterspell",
    15,
    30,
    2,
    "Instant",
    10,
    "Belay fire in the hole hempen halter galleon wherry swab aft cable gangplank execution dock. Privateer wench cackle fruit case shot brigantine provost pillage splice the main brace transom gabion.",
    "Main sheet me bilged on her anchor schooner execution dock bring a spring upon her cable Pirate Round coxswain bucko bilge water.",
    "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=413585&type=card"
  );

  const item6 = new Store(
    6,
    "Mana Drain",
    60,
    30,
    2,
    "Instant",
    10,
    "Boom gabion bilge brigantine landlubber or just lubber Nelsons folly Sail ho knave trysail yawl. Letter of Marque gunwalls gabion Plate Fleet lass blow the man down hardtack schooner swab spirits.",
    "Pirate yard rigging red ensign Privateer no prey, no pay cackle fruit belay fore swing the lead.",
    "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=1491&type=card"
  );

  const item7 = new Store(
    7,
    "Beledros Witherbloom",
    42,
    35,
    2,
    "Creature",
    10,
    "Long boat quarterdeck bilge scourge of the seven seas scallywag hornswaggle ballast topsail me cable. Black jack jack driver schooner fathom chandler bilged on her anchor swing the lead Admiral of the Black jury mast.",
    "Hogshead interloper spirits smartly parrel come about provost heave to Cat o'nine tails long boat.",
    "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=517443&type=card"
  );

  const item8 = new Store(
    8,
    "Fleshbag Marauder",
    1,
    3,
    5,
    "Creature",
    10,
    "Crow's nest weigh anchor stern shrouds pinnace cable cackle fruit Privateer loaded to the gunwalls Nelsons folly. Plunder Arr Sea Legs Pirate Round chantey gangplank mizzen lugsail parley black jack.",
    "Trysail capstan furl wench Pieces of Eight Plate Fleet bucko ye tender draught.",
    "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=398625&type=card"
  );

  const item9 = new Store(
    9,
    "Abolish",
    45,
    30,
    2,
    "Instant",
    10,
    "Lass league piracy Spanish Main landlubber or just lubber log aye spanker shrouds Davy Jones' Locker. Quarterdeck marooned galleon lad snow mizzenmast nipper lanyard capstan draught.",
    "Furl cable gaff Jack Ketch scourge of the seven seas hearties loot Admiral of the Black lass mizzen.",
    "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=222765&type=card"
  );

  const item10 = new Store(
    10,
    "Adaptive Automation",
    55,
    30,
    2,
    "Artifact",
    10,
    "Haul wind coffer long clothes rope's end reef crimp capstan Privateer flogging clipper. Fluke Letter of Marque rutters dance the hempen jig clap of thunder lugsail starboard shrouds square-rigged jack.",
    "Belay take a caulk bucko measured fer yer chains smartly skysail Yellow Jack cable Pirate Round scallywag.",
    "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=220147&type=card"
  );

  const item11 = new Store(
    11,
    "Adrestia",
    24,
    30,
    2,
    "Artifact",
    10,
    "Haul wind coffer long clothes rope's end reef crimp capstan Privateer flogging clipper. Fluke Letter of Marque rutters dance the hempen jig clap of thunder lugsail starboard shrouds square-rigged jack.",
    "Belay take a caulk bucko measured fer yer chains smartly skysail Yellow Jack cable Pirate Round scallywag.",
    "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=667196&type=card"
  );

  const item12 = new Store(
    12,
    "Thriving Isle",
    19,
    30,
    2,
    "Land",
    10,
    "Barbary Coast chase Pirate Round crow's nest no prey, no pay ahoy matey code of conduct ye case shot. Parley Corsair list come about hang the jib plunder cog driver snow lateen sail.",
    "Walk the plank scurvy gally sloop yo-ho-ho league scuppers cutlass Pirate Round hempen halter.",
    "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=489203&type=card"
  );

  const item13 = new Store(
    13,
    "Doran, the Siege Tower",
    18,
    30,
    2,
    "Creature",
    10,
    "Spyglass holystone Letter of Marque log fire ship hearties Jack Ketch spike bilge water yard. Run a rig red ensign skysail fire in the hole gangplank booty stern cackle fruit bring a spring upon her cable barkadeer.",
    "Bowsprit splice the main brace clap of thunder doubloon loaded to the gunwalls run a rig Yellow Jack Pieces of Eight swab six pounders.",
    "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=140201&type=card"
  );

  const item14 = new Store(
    14,
    "Fourth Bridge Prowler",
    3,
    30,
    3,
    "Creature",
    10,
    "American Main bounty jib Jack Ketch warp rum black jack Sink me plunder brig. Lugger heave down boom mizzenmast bring a spring upon her cable to go on account yard black jack come about jury mast.",
    "Brethren of the Coast hearties deadlights marooned belaying pin chase loot bring a spring upon her cable quarterdeck mizzen.",
    "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=423727&type=card"
  );

  const item15 = new Store(
    15,
    "Black Lotus",
    500,
    1,
    4,
    "Artifact",
    10,
    "Sloop pressgang gunwalls gally pillage grog deadlights holystone Privateer fluke. Tack run a rig Jolly Roger swab six pounders rigging long boat gangplank keelhaul draft.",
    "Matey Yellow Jack jury mast fire ship trysail knave brig list bucko ho.",
    "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=600&type=card"
  );

  // Add items to Store
  storeItems.push(
    item1,
    item2,
    item3,
    item4,
    item5,
    item6,
    item7,
    item8,
    item9,
    item10,
    item11,
    item12,
    item13,
    item14,
    item15
  );

  // Run function to display store, cart and generate dropdown
  displayStoreItems();
  displayCartItems();
  showDropDown();
}

// Function to display store items
function displayStoreItems() {
  // create table element
  var table = "<table><tr>";

  // Add table headers
  table +=
    "<th>ID</th><th>Name</th><th>Price</th><th>Quantity</th><th>Max Per Customer</th><th>Image</th></tr>";

  // Iterate through array length and add each item as a row in the table
  for (var i = 0; i < storeItems.length; i++) {
    table += "<tr>";
    table += `<td>${storeItems[i].id}</td>`;
    table += `<td>${storeItems[i].name}</td>`;
    table += `<td>$${convertPrice(storeItems[i].priceCdn)}</td>`; // included the convertPrice function
    table += `<td>${storeItems[i].quantity}</td>`;
    table += `<td>${storeItems[i].maxPerCust}</td>`;
    table += `<td><img src="${storeItems[i].image}" alt="${storeItems[i].name}" width="100"></td>`;
    table += "</tr>";
  }

  table += "</table>";

  // Display the table in the element with ID 'inventoryOutput'
  document.getElementById("inventoryOutput").innerHTML = table;
}

// Function to display items in cart
function displayCartItems() {
  // Create table element
  var table =
    "<table><tr><th>ID</th><th>Price</th><th>Quantity</th><th>Subtotal</th></tr>";

  // If statement to ensure cart is empty or not
  if (cartItems.length === 0) {
    // Alert user that cart is empty
    table = "<p class = 'alert' style='margin-left: 30px'>No items in cart</p>";
  } else {
    // Iterate through cart items and add to table
    for (var i = 0; i < cartItems.length; i++) {
      table += "<tr>";
      table += `<td>${cartItems[i].id}</td>`;
      table += `<td>${convertPrice(
        cartItems[i].priceCdn * cartItems[i].quantity
      )}</td>`;
      table += `<td>${cartItems[i].quantity}</td>`;
      table += `<td>${convertPrice(
        cartItems[i].priceCdn * cartItems[i].quantity + cartItems[i].costShip
      )}</td>`;
      table += "<tr>";
    }
  }

  // Display the table in the element with ID 'cartOutput'
  document.getElementById("cartOutput").innerHTML = table;

  // Run cart total function
  displayCartTotals();
}

// Function to calculate cart total
function displayCartTotals() {
  // variables for table, subtotal and shipping total
  var table = "";
  var subtotal = 0;
  var shippingTotal = 0;

  // Iterate through cart items
  for (var i = 0; i < cartItems.length; i++) {
    var item = cartItems[i];

    // Calculate the total price for this item (price * quantity)
    var itemTotal = item.priceCdn * item.quantity; // Total price for this specific item
    subtotal += itemTotal; // Add this item's total price to the subtotal

    // Add the item's shipping cost to the shipping total
    shippingTotal += item.costShip;
  }

  // Variables to store subtotal with shipping, tax and total with tax
  var subtotalWithShipping = subtotal + shippingTotal;
  var tax = subtotalWithShipping * 0.13;
  var total = subtotalWithShipping + tax;

  // Create table with new items.  Includes convertPrice function
  table +=
    "<table class='priceTable'><tr><th class='left'>Type</th><th>Price</th></tr>";
  table += "<tr>";
  table += `<td class="left">SubTotal</td>`;
  table += `<td>${convertPrice(subtotal)}</td>`;
  table += `</tr>`;
  table += "<tr>";
  table += `<td class="left">Shipping</td>`;
  table += `<td>${convertPrice(shippingTotal)}</td>`;
  table += `</tr>`;
  table += "<tr>";
  table += `<td class="left">SubTotal & Shipping</td>`;
  table += `<td>${convertPrice(subtotalWithShipping)}</td>`;
  table += `</tr>`;
  table += "<tr>";
  table += `<td class="left">Tax</td>`;
  table += `<td>${convertPrice(tax)}</td>`;
  table += `</tr>`;
  table += "<tr>";
  table += `<td class="left totalPrice">Total Price</td>`;
  table += `<td class="totalPrice">${convertPrice(total)}</td>`;
  table += "</tr>";
  table += "</table>";

  // Display the table in the element with ID 'cartCheckout'
  document.getElementById("cartCheckout").innerHTML = table;
}

// Function to add items to cart
function addToCart() {
  // Fetch input and quantity
  var inputId = Number(document.getElementById("addItemId").value);
  var inputQty = Number(document.getElementById("addItemQty").value);
  var qtyMessage = document.getElementById("addQtyValidationMessage");
  var idMessage = document.getElementById("addIDValidationMessage");

  // Variable to store found item
  var foundItem = null;
  var newCartItem = null;
  var foundCartItem = null;

  // Validate if a value has been entered
  if (!inputId) {
    idMessage.innerHTML = "<span class='alert'>Please enter a value.</span>";
    return;
  }

  // Validate if a value has been entered
  if (!inputQty) {
    qtyMessage.innerHTML = "<span class='alert'>Please enter a value.</span>";
    return;
  }

  // Validate to see if input ID matches store item ID
  for (var i = 0; i < storeItems.length; i++) {
    if (storeItems[i].id === inputId) {
      // Update with current input ID
      foundItem = storeItems[i];
    }
  }

  // Alerts customer if item is not found
  if (!foundItem) {
    idMessage.innerHTML = `<span class='alert'>The ID has not been found in the inventory.</span>`;
    return;
  }

  // Alerts customer if the they purchased more than their allowed max or there isn't enough quantity
  if (inputQty > foundItem.maxPerCust || inputQty > foundItem.quantity) {
    qtyMessage.innerHTML = `<span class='alert'>Cannot process.  Our quantity for this item is ${foundItem.quantity} and the maximum allowed per customer is ${foundItem.maxPerCust}.</span>`;
    return;
  }

  // Validate if the item is available
  if (!foundItem || foundItem.quantity === 0) {
    qtyMessage.innerHTML = `<span class='alert'>Items no longer in stock!</span>`;
    return;
  }

  // Validate to see if item is in cart
  for (var i = 0; i < cartItems.length; i++) {
    if (cartItems[i].id === inputId) {
      foundCartItem = cartItems[i];
    }
  }

  // If item is in cart update quantity.
  if (foundCartItem) {
    // Validate if customer has hit their max quantity and alert customer
    if (foundCartItem.quantity + inputQty > foundItem.maxPerCust) {
      qtyMessage.innerHTML = `<span class='alert'>You can't add more than ${foundItem.maxPerCust} of this item in your cart.</span>`;
      return;
    } else {
      // Update total quantity
      foundCartItem.quantity += inputQty;
    }
    // if not found add new item to cart
  } else {
    newCartItem = new Cart(
      foundItem.id,
      foundItem.priceCdn,
      inputQty,
      foundItem.costShip
    );
    cartItems.push(newCartItem);
  }

  // Remove quantity of the foundItem variable
  foundItem.quantity -= inputQty;

  // reset messages to customer to none
  idMessage.innerHTML = "";
  qtyMessage.innerHTML = "";

  // run function to display store items and cart items
  displayStoreItems();
  displayCartItems();
}

// Function to remove items from cart
function removeFromCart() {
  // Variables to fetch input values for ID and quantity
  var inputId = Number(document.getElementById("addItemId").value);
  var inputQty = Number(document.getElementById("addItemQty").value);

  // variables to fetch where messages for customers
  var qtyMessage = document.getElementById("addQtyValidationMessage");
  var idMessage = document.getElementById("addIDValidationMessage");

  // variables to store found items and cart items
  foundItem = null;
  foundCartItem = null;

  // Validate to see if cart is empty
  if (cartItems.length === 0) {
    idMessage.innerHTML = `<span class='alert'>There are no more items to remove.  Your cart is empty.</span>`;
  }

  // Iterate through cart items
  for (var i = 0; i < cartItems.length; i++) {
    if (cartItems[i].id === inputId) {
      // store cart items
      foundCartItem = cartItems[i];
      index = i;
      break;
    }
  }

  // Iterate through store items
  for (var i = 0; i < storeItems.length; i++) {
    if (storeItems[i].id === foundCartItem.id) {
      // store found store item in foundItem variable
      foundItem = storeItems[i];
      break;
    }
  }

  // Alert customer no item found in cart
  if (!foundCartItem) {
    idMessage.innerHTML = `<span class='alert'>Item not found in cart.</span>`;
  }

  // Validate if item found in cart
  if (foundCartItem) {
    // Alert customer if cart quantity is zero
    if (foundCartItem.quantity < inputQty) {
      qtyMessage.innerHTML = `<span class='alert'>There are no more items.</span>`;
    }

    // Update quantity of cart items and found items
    foundCartItem.quantity -= inputQty;
    foundItem.quantity += inputQty;
  }

  // Validates if cart is empty and removes items from cartItems
  if (foundCartItem.quantity < 1) {
    cartItems.splice(index, 1);
  }

  // Reset messages to none
  idMessage.innerHTML = "";
  qtyMessage.innerHTML = "";

  // Run functions
  displayStoreItems();
  displayCartItems();
}

// Function to calculate currency conversion based on currency selected
function convertPrice(canadianPrice) {
  // Retrieve value of currencySelector
  var currency = document.getElementById("currencySelector").value;

  // Create a variable that will store the default conversion rate (CDN)
  var conversionRate = 1;

  // Check and update conversion rate based on selector
  if (currency === "USD") {
    conversionRate = 1.4;
  } else if (currency === "GBP") {
    conversionRate = 1.8;
  }

  // Returns that price (CDN) * by updated conversion rate and appends the currency i.e USD
  return (canadianPrice * conversionRate).toFixed(2) + " " + currency;
}

// Function that update prices based on currency selected.  Will run when selector is updated
function updatePrices() {
  displayStoreItems();
  displayCartItems();
  flagChange();
}

// Function to open pop-out window for item details
function openPopout() {
  // Variable to create a table
  table = "";

  // Variable to fetch ids for messages, popout content and inputs
  var idMessage = document.getElementById("addIDValidationMessage");
  var popoutContent = document.getElementById("popout-content");
  var inputId = Number(document.getElementById("addItemId").value);

  // Variable created for found item
  foundItem = null;

  // Iterate through store items and stores store item in foundItem variable
  for (var i = 0; i < storeItems.length; i++) {
    if (storeItems[i].id === inputId) {
      foundItem = storeItems[i];
      break;
    }
  }

  // Validates if no value in foundItem and alerts customer no item found
  if (!foundItem) {
    idMessage.innerHTML = `<span class='alert'>No item found.  Please try again.</span>`;
    return;
  }

  // Fetch popout Id Element and display block
  document.getElementById("popout").style.display = "block";

  // Create table in popout window with Item details
  table += "<table class='detailTable'>";
  table += "<tr>";
  table += "<td class='left'>ID: </td>";
  table += `<td class='left'>${foundItem.id}</td></tr>`;
  table += "<tr>";
  table += "<td class='left'>Name: </td>";
  table += `<td class='left'>${foundItem.name}</td></tr>`;
  table += "<tr>";
  table += "<td class='left'>Price: </td>";
  table += `<td class='left'>$${convertPrice(foundItem.priceCdn)}</td></tr>`;
  table += "<tr>";
  table += "<td class='left'>Qty: </td>";
  table += `<td class='left'>${foundItem.quantity}</td></tr>`;
  table += "<tr>";
  table += "<td class='left'>Category: </td>";
  table += `<td class='left'>${foundItem.category}</td></tr>`;
  table += "<tr>";
  table += "<td class='left'>Cost to Ship: </td>";
  table += `<td class='left'>$${convertPrice(foundItem.costShip)}</td></tr>`;
  table += "<tr>";
  table += "<td class='left'>Review: </td>";
  table += `<td class='left'>${foundItem.review}</td></tr>`;
  table += "</table>";

  // Display table in DOM
  popoutContent.innerHTML = table;
}

// Function to close the pop-out window
function closePopout() {
  // Display for popout set to non
  document.getElementById("popout").style.display = "none";
}

// Function to change flag image
function flagChange() {
  // Fetch Ids to store flag image and currency selected
  var flagImage = document.getElementById("currencyFlag");
  var currency = document.getElementById("currencySelector").value;

  // validate selector value to display image of flag
  if (currency === "USD") {
    flagImage.src =
      "https://www.sciencekids.co.nz/images/pictures/flags96/United_States.jpg";
    console.log(flagImage.src);
  } else if (currency === "GBP") {
    flagImage.src =
      "https://www.sciencekids.co.nz/images/pictures/flags96/United_Kingdom.jpg";
  } else if (currency === "CAD") {
    flagImage.src =
      "https://www.sciencekids.co.nz/images/pictures/flags96/Canada.jpg";
  }
}

// Function to Submit a review
function submitReview() {
  // Fetch inputs
  var reviewId = Number(document.getElementById("reviewId").value);
  var reviewDesc = document.getElementById("reviewDesc").value;
  var reviewNum = Number(document.getElementById("reviewNum").value);

  // Fetch message alert elements for customer
  var reviewIdMsg = document.getElementById("reviewIdMsg");
  var addRatingValidationMessage = document.getElementById(
    "addRatingValidationMessage"
  );

  // Variable to store found item
  var foundItem = null;
  var newReviewItem = null;
  var newRating = null;

  // Validate if a value has been entered
  if (!reviewId) {
    reviewIdMsg.innerHTML = "<span class='alert'>Please enter a value.</span>";
    return;
  }

  // Validate if a value has been entered
  if (!reviewNum) {
    addRatingValidationMessage.innerHTML =
      "<span class='alert'>Please enter a value.</span>";
    return;
  }

  // Validate to see if input ID matches store item ID
  for (var i = 0; i < storeItems.length; i++) {
    if (storeItems[i].id === reviewId) {
      // Update foundItem if match is found
      foundItem = storeItems[i];
    }
  }

  // foundItem true then append review
  if (foundItem) {
    // Push new review to array
    newReviewItem = new Review(foundItem.id, reviewDesc, reviewNum);
    reviewItems.push(newReviewItem);

    // Add review to the found ID
    foundItem.review += " " + reviewDesc;

    // Customer Alert that review has been submitted
    reviewIdMsg.innerHTML =
      "<span class='confirmation'>Review has been submitted.</span>";
  }

  // Function to display store items
  displayStoreItems();
}

// Function to add items to dropdown list
function showDropDown() {
  // Define variable for found items
  var foundItem = "";

  // Define array for when we need to organize categories into its own array
  var seenCategories = [];

  // Iterate through store items to find all categories
  for (var i = 0; i < storeItems.length; i++) {
    foundItem = storeItems[i].category;

    // Push to seenCategories array when category item is not found.  Allows us to remove duplicates
    if (!seenCategories.includes(foundItem)) {
      seenCategories.push(foundItem);
    }
  }

  // Iterate through new seenCategories array
  for (var j = 0; j < seenCategories.length; j++) {
    // Create new option element
    var tempOption = document.createElement("option");

    tempOption.innerHTML = seenCategories[j];
    tempOption.value = seenCategories[j];

    // Append new categories as an option in dropdown
    displayFilter.appendChild(tempOption);
  }
}

// Function do display items based on category selection
function showUpdatedStore() {
  // Fetch value of displayFilter
  var displayFilter = document.getElementById("displayFilter").value;
  var inventoryOutput = document.getElementById("inventoryOutput");

  inventoryOutput.innerHTML = "";
  var foundItem = "";

  // create table element
  var table = "<table><tr>";

  // Add table headers
  table +=
    "<th>ID</th><th>Name</th><th>Price</th><th>Quantity</th><th>Max Per Customer</th><th>Image</th></tr>";

  // Iterate through store items
  for (var i = 0; i < storeItems.length; i++) {
    foundItem = storeItems[i].category;

    // Validate if item category item matches dropdown
    if (foundItem === displayFilter) {
      // create store items in a table
      table += "<tr>";
      table += `<td>${storeItems[i].id}</td>`;
      table += `<td>${storeItems[i].name}</td>`;
      table += `<td>$${convertPrice(storeItems[i].priceCdn)}</td>`; // included the convertPrice function
      table += `<td>${storeItems[i].quantity}</td>`;
      table += `<td>${storeItems[i].maxPerCust}</td>`;
      table += `<td><img src="${storeItems[i].image}" alt="${storeItems[i].name}" width="100"></td>`;
      table += "</tr>";
    }

    // Display the table in the element with ID 'inventoryOutput'
    document.getElementById("inventoryOutput").innerHTML = table;

    // If all is selected display all items in store
    if (displayFilter === "All") {
      // Function to display All Store items and Cart Items
      displayStoreItems();
      displayCartItems();
    }
  }
}

// Run function on window load
window.onload = initialize();
