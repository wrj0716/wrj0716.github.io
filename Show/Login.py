import tkinter #視窗
from tkinter import messagebox

window=tkinter.Tk()
window.title("我的視窗")  
window.geometry('340x360') #設定視窗大小
window.configure(bg='#666')
#函數 function method
userName="123"
userPsw="456"

def login():
    entry_Name=username_entry.get()
    entry_Psw=psw_entry.get()
    if len(entry_Name)==0 or len(entry_Psw)==0:
        print("帳號密碼為必填")
    else:
        if len(entry_Name)<3 or len(entry_Psw)<3:
            print("請輸入3-12位數字")
        else:
            if entry_Name==userName and psw_entry.get()==userPsw:
                messagebox.showinfo(title="登入系統",message=f"嗨，{userName}歡迎回來")
                
            else:
                messagebox.showerror(title="登入訊息",message=f"很抱歉，帳號或密碼錯誤")

frame=tkinter.Frame(bg='#666',pady=40)

login_label=tkinter.Label(frame,text="登入訊息",bg='#666',fg='#fff',font=("Microsoft YaHei",24))
# label.pack()
login_label.grid(row=0,column=0,columnspan=2,sticky="news",pady=25)


username_label=tkinter.Label(frame,text="帳號:",bg='#666',fg='#fff',font=("Microsoft YaHei",11))
username_label.grid(row=1,column=0)
username_entry=tkinter.Entry(frame,font=("Arial",11))
username_entry.grid(row=1,column=1,pady=15)

psw_label=tkinter.Label(frame,text="密碼",bg='#666',fg='#fff',font=("Microsoft YaHei",11))
psw_label.grid(row=2,column=0)
psw_entry=tkinter.Entry(frame,show='*',font=("Arial",11))
psw_entry.grid(row=2,column=1,pady=15)

login_btn=tkinter.Button(frame,text='登 入',font=("Arial",11),command=login)
login_btn.grid(row=3,column=0,columnspan=2,pady=15)

frame.pack()
window.mainloop()