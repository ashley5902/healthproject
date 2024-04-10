import datetime
import random
import linecache


# factors: sleep, exercise, water, caffeine, social interaction, mood, screen time
# sleep threshold: 7 hours
# exercise threshold: 30 min
# water threshold: 8 cups
# caffeine threshold: 400 mg
# social interaction threshold: 8 people
# screen time: 1 hour continuous

sleep = int(input("Enter the hours of sleep you got last night: "))
xrcise = int(input("Enter the minutes of physical activity you've done today: "))
water = int(input("Enter how many cups of water you drank today: "))
caff = int(input("Enter how many mg of caffeine you had today: "))

current_time = datetime.datetime.now()
current_hour = current_time.hour

a = 1

if 6 <= current_hour < 12:
    outfile = "goodmorn.txt"
    if sleep > 7:
        b = 10
    else:
        a = 11
        b = 20
elif water < 4:
    outfile = "combined.txt"
    if xrcise == 0:
        a = 4
        b = 13
    elif xrcise > 20:
        a = 15
        b = 24
    else:
        outfile = "water.txt"
        a = 9
        b = 17
elif water >= 8:
    outfile = "combined.txt"
    if xrcise == 0:
        a = 27
        b = 36
    elif xrcise > 20:
        a = 38
        b = 47
    else:
        outfile = "water.txt"
        b = 8
elif caff >= 400:
    b = 6
    outfile = "caff.txt"

random_line = random.randint(a, b)
print(linecache.getline(outfile, random_line))

# TO-DO: Real-time texts for too much screentime
# b = 10
# outfile = "screentime.txt"

# TO-DO: not sure how we wanted to do social interaction