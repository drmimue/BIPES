import sys
sys.path.insert(0, "/var/www/bipes3")

from app import create_app

application = create_app("sqlite")
