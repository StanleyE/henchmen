CREATE TABLE users(
    email VARCHAR(255) PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

/* INSERT INTO users (email, first_name, last_name, image_url) VALUES 
('demo@test.ca','Demo', 'Tester', 'http://placeimg.com/640/480/nightlife'),
('demon@test.ca', 'Demon', 'Test', 'http://placeimg.com/640/480/people'); */