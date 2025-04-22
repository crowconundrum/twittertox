// Modal data
const modalData = {
    1: {
        title: "Twitter Acquisition Bid - April 14, 2022",
        content: `
            <article class="news-article">
                <!-- First Row -->
                <div class="content-row">
                    <div class="video-container">
                        <iframe width="100%" height="315" 
                            src="https://www.youtube.com/embed/cdZZpaB2kDM" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
                    </div>
                    <div class="main-content">
                        <h3>Musk's Twitter Acquisition Bid</h3>
                        <p class="lead">Elon Musk began buying Twitter shares and became the largest shareholder by April. On April 14th, he bid to purchase Twitter, hoping to make it a free-speech platform. He stated that he would reconsider his shares if his offer is declined.</p>
                        <p>The deal, announced on April 14, 2022, represents a significant premium over Twitter's trading price and comes after Musk became the company's largest shareholder.</p>
                        <blockquote class="key-quote">
                            <p>"I think it's very important for there to be an inclusive arena for free speech."</p>
                            <cite>- @elonmusk</cite>
                        </blockquote>
                    </div>
                </div>

                <!-- Second Row -->
                <div class="content-row">
                    <div class="tweets-container">
                        <h3>Musk's Announcements</h3>
                        <div class="tweet-embed" data-tweet-id="1514698036760530945"></div>
                        <div class="tweet-embed" data-tweet-id="1514564966564651008"></div>
                    </div>
                    <div class="reactions-container">
                        <h3>Public Reactions</h3>
                        <div class="tweet-embed" data-tweet-id="1514736109825433606"></div>
                        <div class="tweet-embed" data-tweet-id="1514714373260029961"></div>
                    </div>
                </div>

                <!-- Third Row -->
                <div class="content-row">
                    <div class="chart-container">
                        <h3>Public Opinion on Acquisition</h3>
                        <canvas id="supportChart"></canvas>
                    </div>
                    <div class="changes-list">
                        <h3>Initial Changes</h3>
                        <ul>
                            <li>Board members removed</li>
                            <li>New leadership team appointed</li>
                            <li>Content moderation policies revised</li>
                            <li>Platform verification system changes proposed</li>
                        </ul>
                    </div>
                </div>

                <!-- Fourth Row -->
                <div class="content-row">
                    <div class="transaction-overview">
                        <h3>Transaction Overview</h3>
                        <div class="stats-container">
                            <div class="stat-box">
                                <div class="stat-value">$44B</div>
                                <div class="stat-label">Total Value</div>
                            </div>
                            <div class="stat-box">
                                <div class="stat-value">$54.20</div>
                                <div class="stat-label">Per Share</div>
                            </div>
                            <div class="stat-box">
                                <div class="stat-value">38%</div>
                                <div class="stat-label">Premium</div>
                            </div>
                        </div>
                    </div>
                    <div class="stock-chart">
                        <h3>Stock Performance</h3>
                        <canvas id="stockChart"></canvas>
                    </div>
                </div>
            </article>
        `
    },
    2: {
        title: "Deal Completion Details",
        content: `
            <div class="modal-grid">
                <div class="modal-card large">
                    <h3>Transaction Overview</h3>
                    <div class="stats-container">
                        <div class="stat-box">
                            <div class="stat-value">Oct 27</div>
                            <div class="stat-label">Completion Date</div>
                        </div>
                        <div class="stat-box">
                            <div class="stat-value">$54.20</div>
                            <div class="stat-label">Final Share Price</div>
                        </div>
                        <div class="stat-box">
                            <div class="stat-value">7,500</div>
                            <div class="stat-label">Employees</div>
                        </div>
                    </div>
                </div>

                <div class="modal-card">
                    <h3>First Tweet as Owner</h3>
                    <div class="quote-tweet">
                        "the bird is freed"
                        <br>
                        <span style="color: #1da1f2">@elonmusk</span>
                    </div>
                </div>

                <div class="modal-card tall">
                    <h3>Initial Changes</h3>
                    <ul class="changes-list">
                        <li>Board members removed</li>
                        <li>Top executives departed</li>
                        <li>New content policies announced</li>
                        <li>Verification system revamp planned</li>
                    </ul>
                </div>

                <div class="modal-card medium">
                    <h3>Stock Performance</h3>
                    <div class="chart-container">
                        <canvas id="stockChart2"></canvas>
                    </div>
                </div>
            </div>
        `
    },
    3: {
        title: "Verification System Chaos",
        content: `
            <p>Musk launched a revised Twitter Blue subscription service for $8 per month that included access to the blue verification checkmark - previously only given to verified celebrities, politicians, journalists, and public figures.</p>
            <p>This change led to a surge of impersonation accounts on the platform, with some fake accounts impersonating companies causing billions in market value losses for real companies. For example, a fake Eli Lilly account tweeted "insulin is now free," causing the company's stock to plummet.</p>
            <p>Twitter had to pause the service and relaunch it later with additional verification steps.</p>
        `
    },
    4: {
        title: "Transformation from Twitter to X",
        content: `
            <!-- Add your content for transformation here -->
        `
    },
    5: {
        title: "Valuation and User Changes",
        content: `
            <!-- Add your content for valuation here -->
        `
    }
};

// Timeline animation
function initializeTimelineAnimation() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    timelineItems.forEach(item => {
        observer.observe(item);
    });
}

// Initialize Twitter embeds
function initializeTweets() {
    if (window.twttr && window.twttr.widgets) {
        const tweetElements = document.querySelectorAll('.tweet-embed');
        tweetElements.forEach(element => {
            element.innerHTML = '';
            const tweetId = element.getAttribute('data-tweet-id');
            if (tweetId) {
                twttr.widgets.createTweet(
                    tweetId,
                    element,
                    {
                        theme: 'dark',
                        align: 'center'
                    }
                );
            }
        });
    }
}

// Initialize support chart
function initializeSupportChart() {
    const supportChartCanvas = document.getElementById('supportChart');
    if (supportChartCanvas) {
        const chartInstance = new Chart(supportChartCanvas.getContext('2d'), {
            type: 'pie',
            data: {
                labels: ['Support', 'Oppose', 'Neutral'],
                datasets: [{
                    data: [45, 30, 25],
                    backgroundColor: ['#1da1f2', '#e0245e', '#aab8c2'],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#fff'
                        }
                    },
                    title: {
                        display: true,
                        text: 'Public Response to Twitter Acquisition',
                        color: '#fff'
                    }
                }
            }
        });
        window._modalChart = chartInstance;
    }
}

// Initialize stock chart
function initializeStockChart() {
    const stockChartCanvas = document.getElementById('stockChart');
    if (stockChartCanvas) {
        const stockChartInstance = new Chart(stockChartCanvas.getContext('2d'), {
            type: 'line',
            data: {
                labels: ['Apr 13', 'Apr 14', 'Apr 15', 'Apr 18', 'Apr 19'],
                datasets: [{
                    label: 'Twitter Stock Price ($)',
                    data: [45.85, 45.08, 48.93, 47.08, 48.45],
                    borderColor: '#1DA1F2',
                    backgroundColor: 'rgba(29, 161, 242, 0.1)',
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: '#fff'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: '#fff'
                        }
                    }
                }
            }
        });
        if (!window._modalChart) window._modalChart = stockChartInstance;
    }
}

// Initialize modal content
function initializeModalContent() {
    initializeSupportChart();
    initializeStockChart();
    initializeTweets();
}

// Open modal
function openModal(id) {
    const modalOverlay = document.getElementById('modalOverlay');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');

    // Clear old content
    if (window._modalChart) {
        window._modalChart.destroy();
        window._modalChart = null;
    }

    // Set new content
    modalTitle.textContent = modalData[id].title;
    modalContent.innerHTML = modalData[id].content;

    // Show modal
    modalOverlay.classList.add('active');
    
    // Initialize content
    setTimeout(initializeModalContent, 100);
}

// Close modal
function closeModal() {
    const modalOverlay = document.getElementById('modalOverlay');
    modalOverlay.classList.remove('active');
    
    // Clean up chart instance
    if (window._modalChart) {
        window._modalChart.destroy();
        window._modalChart = null;
    }
}

// Initialize all event listeners
function initializeEventListeners() {
    // Read More buttons
    const readMoreButtons = document.querySelectorAll('.read-more');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const id = button.getAttribute('data-id');
            openModal(id);
        });
    });

    // Close button
    const closeModalBtn = document.querySelector('.close-modal');
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }

    // Click background to close
    const modalOverlay = document.getElementById('modalOverlay');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
    }

    // ESC key to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Page load initialization
document.addEventListener('DOMContentLoaded', () => {
    initializeTimelineAnimation();
    initializeEventListeners();
});


