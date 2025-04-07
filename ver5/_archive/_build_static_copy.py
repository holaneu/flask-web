from pywebcopy import save_website
import os

# URL of your running local Flask server
url = 'http://localhost:5000'

# Set project folder to a full absolute path
output_dir = os.path.abspath('web_static_copy')

# Make sure the directory exists
os.makedirs(output_dir, exist_ok=True)

# Save the site
save_website(
    url=url,
    project_folder=output_dir,
    open_in_browser=False,
    delay=None,
    threaded=False
)

print(f"✅ Static copy saved to: {output_dir}")
