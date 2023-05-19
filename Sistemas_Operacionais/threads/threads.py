import threading

def thread_1():
    print('Start thread 1 ...')
    
    for i in range(5):
        print('Thread 1  in progress...')
    
    print('Thread 1  finalized...')

def thread_3():
    print('Start thread 3 ...')
    
    for i in range(5):
        print('Thread 3  in progress...')
    
    print('Thread 3  finalized...')

def thread_2():
    print('Start thread 2 ...')
    for i in range(5):
        print('Thread 2  in progress...')
    
    print('Thread 2  finalized...')


t1 = threading.Thread(target=thread_1)
t2 = threading.Thread(target=thread_2)
t3 = threading.Thread(target=thread_3)


t1.start()
t2.start()
t3.start()
t1.join()
t2.join()
t3.join()

print("Program finalized!")