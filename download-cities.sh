#!/bin/bash

mkdir -p public/images/cities

declare -A cities=(
  [riyadh]="https://images.pexels.com/photos/1757090/pexels-photo-1757090.jpeg"
  [makkah]="https://images.pexels.com/photos/3332640/pexels-photo-3332640.jpeg"
  [medina]="https://images.unsplash.com/photo-1693672199158-fb7f3485d36b"
  [jeddah]="https://images.unsplash.com/photo-1607617609718-ddb2c2a6b937"
  [abha]="https://images.unsplash.com/photo-1632384956504-212db4ab8800"
  [alula]="https://images.unsplash.com/photo-1554475901-4538ddfbccc2"
  [tabuk]="https://images.pexels.com/photos/217528/pexels-photo-217528.jpeg"
  [dammam]="https://images.pexels.com/photos/7783950/pexels-photo-7783950.jpeg"
  [taif]="https://images.unsplash.com/photo-1611428490190-a603682e407c"
  [hail]="https://images.pexels.com/photos/12187158/pexels-photo-12187158.jpeg"
  [najran]="https://images.pexels.com/photos/19353536/pexels-photo-19353536.jpeg"
  [yanbu]="https://images.unsplash.com/photos/lEMTqjgZlH0/download?force=true"
  [al_khobar]="https://images.unsplash.com/photos/GcxO-HKlZLk/download?force=true"
  [buraidah]="https://images.pexels.com/photos/11560677/pexels-photo-11560677.jpeg"
  [al_qassim]="https://images.pexels.com/photos/20203863/pexels-photo-20203863.jpeg"
  [al_jouf]="https://images.unsplash.com/photo-1629870095804-8c1eb35c93a5"
  [wadi_dawasir]="https://images.unsplash.com/photo-1618881893450-3c7b0a48626a"
  [khamis_mushait]="https://images.unsplash.com/photos/ImO6__H9wnE/download?force=true"
)

for city in "${!cities[@]}"
do
  echo "Downloading $city..."

  curl -L "${cities[$city]}" \
    -o "public/images/cities/$city.jpg"

  echo "$city completed"
done

echo "All tourism city images completed successfully."