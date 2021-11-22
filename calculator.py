import datetime
import sys

print("-----")
tolerance = 10
startOffset = 0 #()

startTime = 0 # (s)
startHeight = 5 # (s)
surfaceHeight = 0 # (m)
startThrottle = 0 #  (%)
craftWetMass = 90840 # (kg)
craftDryMass = 18840 # (kg)

planetRadius = 60000 # (m)
planetMass = 2.6457580e19 # (kg)
gravitationalConstant = 6.67E-11
startFuelMass = craftWetMass - craftDryMass # (kg)

engineThrust = 2000000 # (N)
specificImpulse = 340 # (N/Kg) or (s)

fuelConsumption = engineThrust / (specificImpulse * 9.8) # (Kg/s)

precision = 1
lastStatus = ""
statuses = []
offsets = []

while True:
    time = (startTime + 1) / precision
    velocity = 0 # (m/s) upward
    acceleration = 0
    fuelMass = startFuelMass # (kg)
    craftMass = craftDryMass + fuelMass # (kg)
    throttle = startThrottle #  (%)
    craftHeight = startHeight # Distance from planet sea level (m)
    
    while True:
        if time >= startOffset:
            throttle = startThrottle
        else:
            throttle = 0


        engineAcceleration = (engineThrust * throttle) / craftMass

        gravityAcceleration = (gravitationalConstant * ((craftMass * planetMass) / pow(craftHeight + planetRadius, 2))) / craftMass

        acceleration = engineAcceleration - gravityAcceleration

        velocity += acceleration / precision

        fuelMass -= (fuelConsumption * throttle) / precision
        craftMass = craftDryMass + fuelMass
        craftHeight += (velocity / precision)
        time += 1/precision

        if velocity < precision and velocity >=0 and int(craftHeight) in range(int(surfaceHeight), int(surfaceHeight + precision / 4)):
            status = "landed"
            break
        elif craftHeight < surfaceHeight:
            status = "crashed"
            break   
        elif fuelMass < 0 and throttle > 0:
            status = "outOfFuel"
            break
    
    statuses.append(status)
    offsets.append(startOffset)
            
    if status == "crashed" and len(statuses) < 2:
        break

    if status == "crashed" and statuses[-2] == "outOfFuel":
        precision = precision*2

    print(str(datetime.timedelta(seconds=startOffset)) + " @" + str(precision), end="\r")

    if status == "crashed":
        startOffset = startOffset - (1/precision)*10
    elif status == "outOfFuel":
        startOffset = startOffset + (1/precision)*10
    elif status == "landed":
        break

    lastStatus = status

if status == "landed":
    print("Landed by burning " + str(datetime.timedelta(seconds=startOffset)) + " after drop")
    print("Burn time: " + str(datetime.timedelta(seconds=(time - startOffset))))
else:
    print("suicide burn impossible!")
print("-----")