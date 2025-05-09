

// Data for landmarks by state
const stateData = {
goa: {
    name: "Goa",
    description: "India's smallest state and one of its most popular tourist destinations, known for beaches, nightlife, and Portuguese heritage.",
    bestTime: "November to February",
    landmarks: {
        beaches: {
            name: "Goa Beaches",
            description: "Famous for pristine beaches, vibrant nightlife, and Portuguese-influenced architecture. Popular beaches include Baga, Calangute, Anjuna, and Palolem.",
            bestTime: "November to February",
            history: "Goa's coastal culture represents a unique blend of Indian and Portuguese influences from 450 years of Portuguese colonial rule.",
            position: { lat: 15.2993, lon: 74.1240 },
            previewImage: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
        },
        fort: {
            name: "Fort Aguada",
            description: "A well-preserved 17th-century Portuguese fort with a lighthouse offering stunning views of the Arabian Sea.",
            bestTime: "October to March",
            history: "Built in 1612 to guard against Dutch and Maratha invasions, it was the most prized and crucial fort of the Portuguese.",
            position: { lat: 15.4975, lon: 73.7683 },
            previewImage: "https://images.unsplash.com/photo-1583239715191-83337aaa38d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
        },
        church: {
            name: "Basilica of Bom Jesus",
            description: "UNESCO World Heritage Site and one of the best examples of baroque architecture in India, containing the remains of St. Francis Xavier.",
            bestTime: "November to February",
            history: "Construction began in 1594 and was completed in 1605. It houses the mortal remains of St. Francis Xavier.",
            position: { lat: 15.5009, lon: 73.9116 },
            previewImage: "https://images.unsplash.com/photo-1582972236019-ea9e36b6fca2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
        }
    }
},
kerala: {
    name: "Kerala",
    description: "Known as 'God's Own Country', famous for its backwaters, tea plantations, and Ayurvedic treatments.",
    bestTime: "September to March",
    landmarks: {
        backwaters: {
            name: "Kerala Backwaters",
            description: "A network of interconnected canals, rivers, lakes, and inlets formed by more than 900 km of waterways.",
            bestTime: "September to March",
            history: "The backwaters have been used for transportation, fishing, and agriculture for centuries.",
            position: { lat: 9.4981, lon: 76.3388 },
            previewImage: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
        },
        munnar: {
            name: "Munnar",
            description: "A hill station and former resort for the British Raj elite, known for its tea plantations and cool mountain air.",
            bestTime: "September to May",
            history: "The name Munnar is believed to mean 'three rivers', referring to the confluence of three mountain streams.",
            position: { lat: 10.0889, lon: 77.0595 },
            previewImage: "https://images.unsplash.com/photo-1582106243331-8e3c8b4b1e0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
        }
    }
},
rajasthan: {
    name: "Rajasthan",
    description: "Land of Kings, known for its majestic palaces, mighty fortresses, and rich cultural heritage.",
    bestTime: "October to March",
    landmarks: {
        jaipur: {
            name: "Jaipur (Pink City)",
            description: "The capital city of Rajasthan, known as the 'Pink City' due to the color of its buildings.",
            bestTime: "October to March",
            history: "Founded in 1727 by Maharaja Sawai Jai Singh II, Jaipur was planned according to Vastu Shastra.",
            position: { lat: 26.9124, lon: 75.7873 },
            previewImage: "https://images.unsplash.com/photo-1585506942812-e72b29cef752?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
        },
        udaipur: {
            name: "Lake Palace, Udaipur",
            description: "A luxury hotel located on the island of Jag Niwas in Lake Pichola, appearing to float on the water.",
            bestTime: "September to March",
            history: "Built as a royal summer palace in 1746, it was converted into a luxury hotel in the 1960s.",
            position: { lat: 24.5755, lon: 73.6822 },
            previewImage: "https://images.unsplash.com/photo-1585506942812-e72b29cef752?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
        }
    }
},
delhi: {
    name: "Delhi",
    description: "India's capital territory and a major metropolis with a fascinating mix of ancient monuments and modern infrastructure.",
    bestTime: "October to March",
    landmarks: {
        redfort: {
            name: "Red Fort",
            description: "A historic fort that served as the main residence of the Mughal Emperors for nearly 200 years.",
            bestTime: "October to March",
            history: "Built in 1639 by Emperor Shah Jahan when he moved his capital from Agra to Delhi.",
            position: { lat: 28.6562, lon: 77.2410 },
            previewImage: "https://images.unsplash.com/photo-1585506942812-e72b29cef752?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
        },
        qutub: {
            name: "Qutub Minar",
            description: "A UNESCO World Heritage Site and the tallest brick minaret in the world.",
            bestTime: "October to March",
            history: "Construction began in 1192 by Qutb-ud-din Aibak and was completed by his successor Iltutmish.",
            position: { lat: 28.5245, lon: 77.1855 },
            previewImage: "https://images.unsplash.com/photo-1585506942812-e72b29cef752?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
        }
    }
},
maharashtra: {
    name: "Maharashtra",
    description: "One of India's largest states, home to Mumbai and known for its caves, forts, and vibrant culture.",
    bestTime: "October to March",
    landmarks: {
        gateway: {
            name: "Gateway of India",
            description: "An arch monument built during the British Raj, overlooking the Arabian Sea.",
            bestTime: "October to March",
            history: "Built to commemorate the landing of King George V and Queen Mary in 1911.",
            position: { lat: 18.9220, lon: 72.8347 },
            previewImage: "https://images.unsplash.com/photo-1585506942812-e72b29cef752?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
        },
        ellora: {
            name: "Ellora Caves",
            description: "UNESCO World Heritage Site with rock-cut temples dating from the 6th-10th centuries.",
            bestTime: "November to March",
            history: "The caves represent three different religions: Buddhism, Hinduism, and Jainism.",
            position: { lat: 20.0268, lon: 75.1779 },
            previewImage: "https://images.unsplash.com/photo-1585506942812-e72b29cef752?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
        }
    }
},
tamilnadu: {
    name: "Tamil Nadu",
    description: "Known for its Dravidian-style temples, classical dance forms, and distinctive cuisine.",
    bestTime: "October to March",
    landmarks: {
        meenakshi: {
            name: "Meenakshi Temple",
            description: "A historic Hindu temple dedicated to Goddess Meenakshi and Lord Sundareswarar.",
            bestTime: "October to March",
            history: "The temple was built by the Pandya king Kulasekara Pandyan around the 6th century CE.",
            position: { lat: 9.9195, lon: 78.1193 },
            previewImage: "https://images.unsplash.com/photo-1585506942812-e72b29cef752?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
        },
        mahabalipuram: {
            name: "Shore Temple, Mahabalipuram",
            description: "A UNESCO World Heritage Site with rock-cut temples overlooking the Bay of Bengal.",
            bestTime: "November to February",
            history: "Built during the 7th century Pallava dynasty, it's one of the oldest structural stone temples of South India.",
            position: { lat: 12.6162, lon: 80.1995 },
            previewImage: "https://images.unsplash.com/photo-1585506942812-e72b29cef752?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
        }
    }
},
karnataka: {
    name: "Karnataka",
    description: "Home to the tech hub of Bangalore, ancient ruins of Hampi, and beautiful coastal areas.",
    bestTime: "October to February",
    landmarks: {
        mysore: {
            name: "Mysore Palace",
            description: "The official residence of the Wadiyar dynasty and one of the most famous tourist attractions in India.",
            bestTime: "October to February",
            history: "The current palace was built in 1912 after the old wooden palace was destroyed in a fire.",
            position: { lat: 12.3052, lon: 76.6552 },
            previewImage: "https://images.unsplash.com/photo-1585506942812-e72b29cef752?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
        },
        hampi: {
            name: "Hampi Ruins",
            description: "UNESCO World Heritage Site with ruins of the Vijayanagara Empire dating from the 14th century.",
            bestTime: "November to February",
            history: "Hampi was the capital of the Vijayanagara Empire in the 14th century and was one of the richest cities in the world at that time.",
            position: { lat: 15.3350, lon: 76.4600 },
            previewImage: "https://images.unsplash.com/photo-1585506942812-e72b29cef752?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
        }
    }
}
};

// Initialize variables
let scene, camera, renderer, earth, raycaster, mouse;
let markers = [];
let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };
let targetRotation = { x: 0, y: 0 };
let currentRotation = { x: 0, y: 0 };
let selectedMarker = null;
let autoRotate = true;
let earthRadius = 1;

// DOM elements
const stateSelect = document.getElementById('state');
const landmarkSelect = document.getElementById('landmark');
const searchInput = document.getElementById('search');
const searchBtn = document.getElementById('search-btn');
const resetBtn = document.getElementById('reset-btn');
const locationInfo = document.getElementById('location-info');
const infoTitle = document.getElementById('info-title');
const infoDescription = document.getElementById('info-description');
const infoLocation = document.getElementById('info-location');
const infoBestTime = document.getElementById('info-best-time');
const infoState = document.getElementById('info-state');
const infoHistory = document.getElementById('info-history');
const preview = document.getElementById('preview');
const tooltip = document.getElementById('tooltip');
const loading = document.getElementById('loading');

// Initialize 3D scene
function init() {
// Create scene
scene = new THREE.Scene();

// Create camera
camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 2;

// Create renderer
renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 1);
document.body.appendChild(renderer.domElement);

// Add lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(5, 3, 5);
scene.add(directionalLight);

// Create raycaster for mouse interactions
raycaster = new THREE.Raycaster();
mouse = new THREE.Vector2();

// Create Earth
createEarth();

// Add India highlight
addIndiaHighlight();

// Add state markers
addStateMarkers();

// Setup event listeners
setupEventListeners();

// Start animation loop
animate();

// Hide loading screen after everything is initialized
setTimeout(() => {
    loading.style.display = 'none';
}, 1500);
}

// Create the Earth sphere
function createEarth() {
const earthGeometry = new THREE.SphereGeometry(earthRadius, 64, 64);

// Load Earth textures
const textureLoader = new THREE.TextureLoader();

// Use event listeners to track loading progress
let loadedTextures = 0;
const totalTextures = 3;

function checkAllTexturesLoaded() {
    loadedTextures++;
    if (loadedTextures === totalTextures) {
        // All textures loaded
        loading.textContent = "Preparing India Explorer...";
    }
}

const earthTexture = textureLoader.load(
    'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_atmos_2048.jpg', 
    checkAllTexturesLoaded,
    undefined,
    function(err) {
        console.error('Error loading earth texture:', err);
    }
);

const earthBumpMap = textureLoader.load(
    'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_normal_2048.jpg',
    checkAllTexturesLoaded,
    undefined,
    function(err) {
        console.error('Error loading bump map:', err);
    }
);

const earthSpecularMap = textureLoader.load(
    'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_specular_2048.jpg',
    checkAllTexturesLoaded,
    undefined,
    function(err) {
        console.error('Error loading specular map:', err);
    }
);

const earthMaterial = new THREE.MeshPhongMaterial({
    map: earthTexture,
    bumpMap: earthBumpMap,
    bumpScale: 0.05,
    specularMap: earthSpecularMap,
    specular: new THREE.Color('grey'),
    shininess: 5
});

earth = new THREE.Mesh(earthGeometry, earthMaterial);
scene.add(earth);
}

// Add India highlight
function addIndiaHighlight() {
const indiaGeometry = new THREE.SphereGeometry(0.03, 32, 32);
const indiaMaterial = new THREE.MeshBasicMaterial({ 
    color: 0xff5722,
    transparent: true,
    opacity: 0.8
});

const india = new THREE.Mesh(indiaGeometry, indiaMaterial);

// Position for India (approximate)
const indiaLat = 20.5937;
const indiaLon = 78.9629;

// Add pulse effect
const pulseMaterial = new THREE.MeshBasicMaterial({
    color: 0xff5722,
    transparent: true,
    opacity: 0.4
});

const pulseGeometry = new THREE.SphereGeometry(0.03, 32, 32);
const pulse = new THREE.Mesh(pulseGeometry, pulseMaterial);

// Position both objects
positionOnGlobe(india, indiaLat, indiaLon);
positionOnGlobe(pulse, indiaLat, indiaLon);

// Add to scene
india.name = "India";
india.userData = {
    type: "country",
    name: "India",
    description: "The Republic of India is a country in South Asia. It is the seventh-largest country by area, the second-most populous country, and the most populous democracy in the world."
};

scene.add(india);
scene.add(pulse);

// Animate pulse
const scalePulse = () => {
    pulse.scale.x = 1 + 0.5 * Math.sin(Date.now() * 0.003);
    pulse.scale.y = 1 + 0.5 * Math.sin(Date.now() * 0.003);
    pulse.scale.z = 1 + 0.5 * Math.sin(Date.now() * 0.003);
    
    requestAnimationFrame(scalePulse);
};

scalePulse();
}

// Add state markers
function addStateMarkers() {
// Clear existing markers
markers.forEach(marker => {
    scene.remove(marker);
});
markers = [];

// Loop through states and add markers
for (const stateKey in stateData) {
    const state = stateData[stateKey];
    
    // Add markers for each landmark in the state
    for (const landmarkKey in state.landmarks) {
        const landmark = state.landmarks[landmarkKey];
        
        // Create marker
        const markerGeometry = new THREE.SphereGeometry(0.015, 16, 16);
        const markerMaterial = new THREE.MeshBasicMaterial({ 
            color: 0x00ff00,
            transparent: true,
            opacity: 0.8
        });
        
        const marker = new THREE.Mesh(markerGeometry, markerMaterial);
        
        // Position marker
        positionOnGlobe(marker, landmark.position.lat, landmark.position.lon);
        
        // Add metadata
        marker.name = landmark.name;
        marker.userData = {
            type: "landmark",
            stateKey: stateKey,
            landmarkKey: landmarkKey,
            name: landmark.name,
            description: landmark.description,
            state: state.name,
            bestTime: landmark.bestTime,
            history: landmark.history,
            previewImage: landmark.previewImage
        };
        
        // Add to scene and markers array
        scene.add(marker);
        markers.push(marker);
    }
}
}

// Position object on globe
function positionOnGlobe(object, latitude, longitude) {
// Convert latitude and longitude to radians
const phi = (90 - latitude) * (Math.PI / 180);
const theta = (longitude + 180) * (Math.PI / 180);

// Calculate position
const x = -earthRadius * Math.sin(phi) * Math.cos(theta);
const y = earthRadius * Math.cos(phi);
const z = earthRadius * Math.sin(phi) * Math.sin(theta);

object.position.set(x, y, z);

// Rotate the object to face outward from the sphere
object.lookAt(new THREE.Vector3(0, 0, 0));
object.rotation.z = 0; // Reset z rotation to keep markers upright
}

// Setup event listeners
function setupEventListeners() {
// State selection change
stateSelect.addEventListener('change', () => {
    const selectedState = stateSelect.value;
    updateLandmarkDropdown(selectedState);
    
    if (selectedState) {
        // Rotate to show the selected state
        const firstLandmarkKey = Object.keys(stateData[selectedState].landmarks)[0];
        const firstLandmark = stateData[selectedState].landmarks[firstLandmarkKey];
        
        zoomToLocation(firstLandmark.position.lat, firstLandmark.position.lon, 2);
        
        // Update preview image
        preview.style.backgroundImage = `url(${firstLandmark.previewImage})`;
    } else {
        preview.style.backgroundImage = 'none';
    }
});

// Landmark selection change
landmarkSelect.addEventListener('change', () => {
    const selectedState = stateSelect.value;
    const selectedLandmark = landmarkSelect.value;
    
    if (selectedState && selectedLandmark) {
        const landmark = stateData[selectedState].landmarks[selectedLandmark];
        
        if (landmark) {
            zoomToLocation(landmark.position.lat, landmark.position.lon, 1.6);
            displayLocationInfo(selectedState, selectedLandmark);
            
            // Update preview image
            preview.style.backgroundImage = `url(${landmark.previewImage})`;
        }
    }
});

// Search button click
searchBtn.addEventListener('click', () => {
    const searchText = searchInput.value.toLowerCase().trim();
    
    if (searchText) {
        searchLandmark(searchText);
    }
});

// Search input enter key
searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        const searchText = searchInput.value.toLowerCase().trim();
        
        if (searchText) {
            searchLandmark(searchText);
        }
    }
});

// Reset button click
resetBtn.addEventListener('click', () => {
    resetView();
    locationInfo.style.display = 'none';
    stateSelect.value = '';
    updateLandmarkDropdown('');
    searchInput.value = '';
    preview.style.backgroundImage = 'none';
    autoRotate = true;
});

// Mouse events for rotation
renderer.domElement.addEventListener('mousedown', onMouseDown);
renderer.domElement.addEventListener('mousemove', onMouseMove);
renderer.domElement.addEventListener('mouseup', onMouseUp);
renderer.domElement.addEventListener('click', onMouseClick);

// Touch events for mobile
renderer.domElement.addEventListener('touchstart', onTouchStart);
renderer.domElement.addEventListener('touchmove', onTouchMove);
renderer.domElement.addEventListener('touchend', onTouchEnd);

// Window resize
window.addEventListener('resize', onWindowResize);
}

// Update landmark dropdown based on selected state
function updateLandmarkDropdown(stateKey) {
// Clear existing options
landmarkSelect.innerHTML = '<option value="">-- Select Landmark --</option>';

// Disable dropdown if no state selected
if (!stateKey) {
    landmarkSelect.disabled = true;
    return;
}

// Enable dropdown and add landmarks
landmarkSelect.disabled = false;

const state = stateData[stateKey];
if (state && state.landmarks) {
    for (const key in state.landmarks) {
        const landmark = state.landmarks[key];
        const option = document.createElement('option');
        option.value = key;
        option.textContent = landmark.name;
        landmarkSelect.appendChild(option);
    }
}
}

// Search for a landmark
function searchLandmark(searchText) {
let found = false;

// Search through all states and landmarks
for (const stateKey in stateData) {
    const state = stateData[stateKey];
    
    for (const landmarkKey in state.landmarks) {
        const landmark = state.landmarks[landmarkKey];
        
        // Check if landmark name or state name matches search text
        if (landmark.name.toLowerCase().includes(searchText) || 
            state.name.toLowerCase().includes(searchText)) {
            
            // Update UI
            stateSelect.value = stateKey;
            updateLandmarkDropdown(stateKey);
            landmarkSelect.value = landmarkKey;
            
            // Zoom to location
            zoomToLocation(landmark.position.lat, landmark.position.lon, 1.6);
            
            // Display info
            displayLocationInfo(stateKey, landmarkKey);
            
            // Update preview
            preview.style.backgroundImage = `url(${landmark.previewImage})`;
            
            found = true;
            break;
        }
    }
    if (found) break;
}

if (!found) {
    alert("No matching landmark found. Please try a different search term.");
}
}

// Zoom to a specific location on the globe
function zoomToLocation(latitude, longitude, zoomLevel = 1.5) {
// Convert latitude and longitude to radians
const phi = (90 - latitude) * (Math.PI / 180);
const theta = (longitude + 180) * (Math.PI / 180);

// Calculate target rotation
targetRotation.y = -theta + Math.PI;
targetRotation.x = phi - Math.PI / 2;

// Stop auto-rotation when user selects a location
autoRotate = false;

// Zoom in
camera.position.z = 3 / zoomLevel;
}

// Display location information
function displayLocationInfo(stateKey, landmarkKey) {
const state = stateData[stateKey];
const landmark = state.landmarks[landmarkKey];

// Update info panel
infoTitle.textContent = landmark.name;
infoDescription.textContent = landmark.description;
infoLocation.textContent = state.name;
infoBestTime.textContent = landmark.bestTime;
infoState.textContent = state.name;
infoHistory.textContent = landmark.history;

// Show info panel
locationInfo.style.display = 'block';
}

// Reset view to default
function resetView() {
targetRotation.x = 0;
targetRotation.y = 0;
camera.position.z = 2;

// Reset selected marker if any
if (selectedMarker) {
    selectedMarker.material.color.setHex(0x00ff00);
    selectedMarker = null;
}
}

// Mouse down event
function onMouseDown(event) {
isDragging = true;
previousMousePosition.x = event.clientX;
previousMousePosition.y = event.clientY;

// Stop auto-rotation when user interacts
autoRotate = false;
}

// Mouse move event
function onMouseMove(event) {
if (isDragging) {
    const deltaMove = {
        x: event.clientX - previousMousePosition.x,
        y: event.clientY - previousMousePosition.y
    };
    
    targetRotation.y += deltaMove.x * 0.01;
    targetRotation.x += deltaMove.y * 0.01;
    
    previousMousePosition.x = event.clientX;
    previousMousePosition.y = event.clientY;
}

// Update mouse position for raycaster
mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

// Check for hover
checkHover();
}

// Mouse up event
function onMouseUp() {
isDragging = false;
}

// Mouse click event
function onMouseClick(event) {
if (isDragging) {
    // Don't process click if it was part of a drag
    isDragging = false;
    return;
}

// Update mouse position for raycaster
mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

// Update the raycaster
raycaster.setFromCamera(mouse, camera);

// Calculate objects intersecting the picking ray
const intersects = raycaster.intersectObjects(scene.children);

for (let i = 0; i < intersects.length; i++) {
    const object = intersects[i].object;
    
    // Check if clicked object is a marker
    if (object.userData && object.userData.type === "landmark") {
        // Reset previous selected marker
        if (selectedMarker) {
            selectedMarker.material.color.setHex(0x00ff00);
        }
        
        // Set new selected marker
        selectedMarker = object;
        selectedMarker.material.color.setHex(0xff0000);
        
        // Display info
        displayLocationInfo(object.userData.stateKey, object.userData.landmarkKey);
        
        // Update dropdowns
        stateSelect.value = object.userData.stateKey;
        updateLandmarkDropdown(object.userData.stateKey);
        landmarkSelect.value = object.userData.landmarkKey;
        
        // Update preview
        preview.style.backgroundImage = `url(${object.userData.previewImage})`;
        
        // Stop auto-rotation
        autoRotate = false;
        
        break;
    }
}
}

// Touch start event
function onTouchStart(event) {
if (event.touches.length === 1) {
    isDragging = true;
    previousMousePosition.x = event.touches[0].pageX;
    previousMousePosition.y = event.touches[0].pageY;
    
    // Stop auto-rotation when user interacts
    autoRotate = false;
}
}

// Touch move event
function onTouchMove(event) {
if (isDragging && event.touches.length === 1) {
    const deltaMove = {
        x: event.touches[0].pageX - previousMousePosition.x,
        y: event.touches[0].pageY - previousMousePosition.y
    };
    
    targetRotation.y += deltaMove.x * 0.01;
    targetRotation.x += deltaMove.y * 0.01;
    
    previousMousePosition.x = event.touches[0].pageX;
    previousMousePosition.y = event.touches[0].pageY;
}
}

// Touch end event
function onTouchEnd() {
isDragging = false;
}

// Check for hover over markers
function checkHover() {
// Update the raycaster
raycaster.setFromCamera(mouse, camera);

// Calculate objects intersecting the picking ray
const intersects = raycaster.intersectObjects(scene.children);

let hoveredObject = null;

for (let i = 0; i < intersects.length; i++) {
    const object = intersects[i].object;
    
    // Check if object is a marker
    if (object.userData && object.userData.type === "landmark") {
        hoveredObject = object;
        break;
    }
}

// Show tooltip if hovering over a marker
if (hoveredObject) {
    tooltip.style.display = 'block';
    tooltip.textContent = hoveredObject.name;
    
    // Position tooltip near mouse
    tooltip.style.left = (mouse.x * window.innerWidth / 2 + window.innerWidth / 2 + 10) + 'px';
    tooltip.style.top = (-mouse.y * window.innerHeight / 2 + window.innerHeight / 2 + 10) + 'px';
} else {
    tooltip.style.display = 'none';
}
}

// Window resize event
function onWindowResize() {
camera.aspect = window.innerWidth / window.innerHeight;
camera.updateProjectionMatrix();
renderer.setSize(window.innerWidth, window.innerHeight);
}

// Animation loop
function animate() {
requestAnimationFrame(animate);

// Smooth rotation
currentRotation.x += (targetRotation.x - currentRotation.x) * 0.05;
currentRotation.y += (targetRotation.y - currentRotation.y) * 0.05;

// Auto-rotate if enabled
if (autoRotate) {
    targetRotation.y += 0.002;
}

// Apply rotation
earth.rotation.set(currentRotation.x, currentRotation.y, 0);

renderer.render(scene, camera);
}

// Initialize the application when the window loads
window.addEventListener('load', init);
