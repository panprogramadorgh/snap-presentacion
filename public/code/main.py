from random import randint

megazine_size = 6

while True:
    bullet_pos = randint(0, megazine_size-1)
    if bullet_pos == 0:
        break
    print("You are alive !")

print("You die")