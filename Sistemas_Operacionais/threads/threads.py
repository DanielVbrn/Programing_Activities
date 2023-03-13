import threading

def thread_1():
    print('Start thread 1 ...')
    for i in range(5):
        print('Thread 1  in progress...')
    
    print('Thread 1  finalized...')

def thread_2():
    print('Start thread 2 ...')
    for i in range(5):
        print('Thread 2  in progress...')
    
    print('Thread 2  finalized...')


t1 = threading.Thread(target=thread_1)
t2 = threading.Thread(target=thread_2)


t1.start()
t2.start()
t1.join()
t2.join()

print("Program finalized!")