import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonListHeader, IonItem, IonLabel } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import './Tab1.css';

const Tab1: React.FC = () => {
  // dataset state variable to hold JSON data from WP
  const [dataset, setDataset] = useState<any[]>([]);
  // URL for WP JSON REST endpoint
  const dataURL = "https://dev-cs55-13-kc-test-site.pantheonsite.io/wp-json/twentytwentythree-child/v1/products";
  // useEffect() to get JSON data and populate dataset state variable
  useEffect(() => {
    fetch(dataURL) // fetch() to load raw json string
      .then(response => response.json()) // json() to convert raw string to json object
      .then(data => setDataset(data)) // react state set function to populate data state var
  }, [])



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Products</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Products</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* use map() to loop through JSON array returned from WP */}
        <IonList id="products-list">
          <IonListHeader>Products</IonListHeader>
          {dataset.map((item, index) => (
            <IonItem lines="inset" key={index}>
              <IonLabel>
                <h4>Post title: {item.post_title}</h4>
                <p>Product name: {item.product_name}</p>
                <p>Product inventory: {item.product_inventory}</p>
                <p>Product availability: (1 if available, 0 if not): {item.product_availability}</p>
                <img className="size-medium wp-image-{item.product_image} aligncenter\" src={item.guid} alt="" width="200" height="300" />
                {/* <div className="card-text" dangerouslySetInnerHTML={{ __html: item.post_content }}></div> */}
                {/* <img src={item.product_image} alt="" width="500" height="600"></img> */}

              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
