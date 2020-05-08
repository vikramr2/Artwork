from turtle import *
import numpy as np

#draw initial triangle
penup()
setpos(-200, -200)
pendown()
setpos(200, -200)
setpos(0, int(400*np.cos(np.pi/6)-200))
setpos(-200, -200)

"""
Draws a downward pointing triangle
@param bottom, coordinate of triangle
@param length, side length
"""
def draw_triangle(bottom, length):
    penup()
    setpos(bottom[0], bottom[1])
    pendown()
    setpos(bottom[0]+length/2, bottom[1]+length*np.cos(np.pi/6))
    setpos(bottom[0]-length/2, bottom[1]+length*np.cos(np.pi/6))
    setpos(bottom[0], bottom[1])

"""
Draws serpinskis triangle
Same params bottom, length
@degree, number of levels to this fractal
"""
def serpinski(bottom, length, degree):
    #Draw surrounding triangles
    draw_triangle((bottom[0]-length/4, bottom[1]), length/4)
    draw_triangle((bottom[0]+length/4, bottom[1]), length/4)
    draw_triangle((bottom[0], bottom[1]+length/2*np.cos(np.pi/6)), length/4)

    #if we aren't past our max degree, recurse into surrounding triangles (In order Traversal)
    if (degree > 0):
        serpinski((bottom[0]-length/4, bottom[1]), length/2, degree-1)
    if (degree > 0):
        serpinski((bottom[0]+length/4, bottom[1]), length/2, degree-1)
    if (degree > 0):
        serpinski((bottom[0], bottom[1]+length/2*np.cos(np.pi/6)), length/2, degree-1)

#Draw central triangle
draw_triangle((0, -200), 200)

#Finite degree
degree = 4
serpinski((0, -200), 400, degree)

#Infinite degree
"""
degree = 1
while True:
    serpinski((0, -200), 400, degree)
    degree+=1
"""
