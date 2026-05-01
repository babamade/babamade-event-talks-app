# 1-Day Tech Event Schedule App

This is a simple, single-page web application displaying the schedule for a 1-day tech event filled with technical talks. Users can view the full schedule and filter talks by category.

## Features

*   **Event Schedule:** Displays a clear timeline of talks and breaks.
*   **Talk Details:** Each talk includes title, speakers, category, duration, and a description.
*   **Search by Category:** Users can filter talks by entering keywords related to talk categories.
*   **Responsive Design:** Basic styling to ensure readability on various screen sizes.
*   **Serverless HTML:** The entire application is contained within a single `index.html` file, making it easy to host.

## Technologies Used

*   **Frontend:**
    *   HTML5
    *   CSS3
    *   Vanilla JavaScript
*   **Backend/Scripting:**
    *   Node.js (used for initial schedule data generation, not part of the deployed application)

## How to Run Locally

Since this is a serverless HTML file, you only need a simple web server to view it.

1.  **Clone the repository (if you haven't already):**
    ```bash
    git clone https://github.com/babamade/babamade-event-talks-app.git
    cd babamade-event-talks-app
    ```

2.  **Generate `index.html` (if you wish to re-generate the schedule data):**
    The `index.html` file in this repository already contains the pre-calculated schedule. However, if you modify the `generate-schedule.js` file and want to update `index.html`, run the following command:
    ```bash
    node generate-schedule.js > temp_schedule_data.json
    # Manually copy the content of temp_schedule_data.json into the scheduledTalksData
    # array in index.html (between the <script> tags).
    # This step could be automated with a proper build script for more complex projects.
    ```

3.  **Serve the `index.html` file:**
    Open your terminal or command prompt in the `babamade-event-talks-app` directory.
    Run one of the following Python commands to start a simple local web server:

    *   **Python 3:**
        ```bash
        python3 -m http.server
        ```
    *   **Python 2:**
        ```bash
        python -m SimpleHTTPServer
        ```

4.  **Access the website:**
    Open your web browser and navigate to `http://localhost:8000` (or the port indicated by your server, if different).

## License

This project is open source and available under the [MIT License](LICENSE).
