/*
	Plugin:

	Describe the plugins that are installed in the board
*/

CREATE TABLE plugin (
	id INTEGER PRIMARY KEY,
	package TEXT NOT NULL UNIQUE,
	"name" TEXT NOT NULL,
	version TEXT NOT NULL,
	"data" TEXT NOT NULL,
	created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

/*
	Device type:

	Describe the type of the devices that are supported by the plugin
*/

CREATE TABLE device_type (
	id INTEGER PRIMARY KEY,
	"type" TEXT NOT NULL,
	plugin_id INTEGER,
	"name" TEXT NOT NULL,
	"properties" TEXT NOT NULL,
	"commands" TEXT NOT NULL,
	created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (plugin_id) REFERENCES plugin (id)
		ON DELETE CASCADE
		ON UPDATE CASCADE
);

/*
	Device:

	Describe each device that is installed in the platform
*/

CREATE TABLE device (
	id INTEGER PRIMARY KEY,
	"name" TEXT NOT NULL,
	device_type_id INTEGER,
	"state" TEXT NOT NULL,
	created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (device_type_id) REFERENCES device_type (id)
		ON DELETE CASCADE
		ON UPDATE CASCADE
);

/*
	User:

	Describe the user that is installed in the platform
*/

CREATE TABLE "user" (
	id INTEGER PRIMARY KEY,
	"name" TEXT NOT NULL,
	"username" TEXT NOT NULL,
	"password" TEXT NOT NULL,
	"email" TEXT NOT NULL,
	created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
	updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

/*
	User device:

	Describe the devices that can be controlled by each user
*/

CREATE TABLE user_device (
	id INTEGER PRIMARY KEY,
	device_id TEXT NOT NULL,
	user_id TEXT NOT NULL,
	created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (device_id) REFERENCES device (id)
		ON DELETE CASCADE
		ON UPDATE CASCADE,
	FOREIGN KEY (user_id) REFERENCES "user" (id)
		ON DELETE CASCADE
		ON UPDATE CASCADE
);