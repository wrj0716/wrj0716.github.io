name=input("請輸入帳號")
psw=input("請輸入密碼")
count=0

if len(name)==0 or len(psw)==0:
    print("帳號密碼為必填")
else:
    # while count>=3:
    #     count+=1
    if name=="Tom" and psw=="123456":
        print("歡迎登入")
    else:
        print("帳號或密碼錯誤")
