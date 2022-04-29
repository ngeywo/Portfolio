from django.shortcuts import render
from django.contrib import messages
from django.core.mail import send_mail

# Create your views here.
def home(request):
    return render(request, 'index.html', {})


def projects(requests):
    return render(requests, 'projects.html', {})


def contact(request):
    if request.method  == "POST":
        name = request.POST['name']
        email = request.POST['email']
        phone = request.POST['phone']
        message = request.POST['message']
        
        
        send_mail(
            name,
            message,
            phone,
            ['ngainewt@gmail.com'],
            
        )
        messages.success(request, f'Thank you for contacting me!')

        return render(request, 'contact.html', {'name': name})

    else:
        return render(request, 'index.html', {})