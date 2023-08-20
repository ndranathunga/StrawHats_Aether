from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Optional
import mysql.connector

app = FastAPI()


# Database connection
def get_db():
    return mysql.connector.connect(
        host="localhost",
        user="username",
        password="password",
        database="aether",
    )


# Models
class UserCreate(BaseModel):
    name: str
    email: str
    password: str
    phone_no: str
    planet_id: str


class UserUpdate(BaseModel):
    name: Optional[str]
    email: Optional[str]
    password: Optional[str]
    phone_no: Optional[str]
    planet_id: Optional[str]


# Users Endpoints
@app.post("/api/users")
async def create_user(user: UserCreate):
    db = get_db()
    cursor = db.cursor()
    cursor.execute(
        "INSERT INTO user (name, email, password, phone_no, planet_id) VALUES (%s, %s, %s, %s, %s)",
        (user.name, user.email, user.password, user.phone_no, user.planet_id),
    )
    db.commit()
    db.close()
    return {"message": "User created successfully"}


@app.get("/api/users/{user_id}")
async def get_user(user_id: str):
    db = get_db()
    cursor = db.cursor()
    cursor.execute("SELECT * FROM user WHERE user_id = %s", (user_id,))
    user = cursor.fetchone()
    db.close()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user


@app.put("/api/users/{user_id}")
async def update_user(user_id: str, user: UserUpdate):
    db = get_db()
    cursor = db.cursor()
    cursor.execute(
        "UPDATE user SET name = %s, email = %s, password = %s, phone_no = %s, planet_id = %s WHERE user_id = %s",
        (user.name, user.email, user.password, user.phone_no, user.planet_id, user_id),
    )
    db.commit()
    db.close()
    return {"message": "User updated successfully"}


@app.delete("/api/users/{user_id}")
async def delete_user(user_id: str):
    db = get_db()
    cursor = db.cursor()
    cursor.execute("DELETE FROM user WHERE user_id = %s", (user_id,))
    db.commit()
    db.close()
    return {"message": "User deleted successfully"}


# Planets Endpoints
@app.get("/api/planets")
async def get_planets():
    db = get_db()
    cursor = db.cursor()
    cursor.execute("SELECT * FROM planet")
    planets = cursor.fetchall()
    db.close()
    return planets


@app.get("/api/planets/{planet_id}")
async def get_planet(planet_id: str):
    db = get_db()
    cursor = db.cursor()
    cursor.execute("SELECT * FROM planet WHERE planet_id = %s", (planet_id,))
    planet = cursor.fetchone()
    db.close()
    if not planet:
        raise HTTPException(status_code=404, detail="Planet not found")
    return planet
