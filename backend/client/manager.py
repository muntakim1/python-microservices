from main import db, app
from flask_migrate import Migrate, MigrateCommand

from flask_script import Manager

migrate = Migrate(app, db)

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
manager = Manager(app)
manager.add_command('db', MigrateCommand)

if __name__ == "__main__":
    manager.run()
