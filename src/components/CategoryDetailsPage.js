import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Header from './Header';
import Footer from './Footer';
import CategoryDetails from './CategoryDetails';
import './CategoryDetailsPage.css';

function CategoryDetailsPage() {
    const { categoryId, categoryTitle } = useParams();
    const navigate = useNavigate();
    const { isAuthenticated, loading } = useAuth();
    const [selectedSubcategory, setSelectedSubcategory] = useState(null);
    
    // Decode the title from URL format
    const decodedTitle = decodeURIComponent(categoryTitle || '');
    
    // Redirect if not authenticated
    useEffect(() => {
        if (!loading && !isAuthenticated) {
            // Redirect to home with state to show login modal
            navigate('/', { state: { showLogin: true } });
        }
    }, [isAuthenticated, loading, navigate]);
    
    // Initial setup and cleanup when leaving the page
    useEffect(() => {
        // Remove any modal-open class that might still exist
        document.body.classList.remove('modal-open');
        
        // Scroll to top when page loads
        window.scrollTo(0, 0);
        
        // Cleanup function for when component unmounts
        return () => {
            // Ensure modal-open is removed when navigating away
            document.body.classList.remove('modal-open');
        };
    }, []);
    
    // Find the category data by ID
    const getCategoryData = () => {
        const propertyTypes = [
            {
                id: 1,
                title: "Apartments",
                icon: "🏢",
                subcategories: [
                    { id: 101, name: "Studio Apartments", description: "Compact living spaces perfect for singles" },
                    { id: 102, name: "1 BHK", description: "One bedroom apartments for small families" },
                    { id: 103, name: "2 BHK", description: "Two bedroom apartments with more space" },
                    { id: 104, name: "3+ BHK", description: "Spacious multi-bedroom apartments for larger families" },
                    { id: 105, name: "Penthouses", description: "Luxury apartments on the top floors with premium amenities" }
                ]
            },
            {
                id: 2,
                title: "Independent Houses",
                icon: "🏠",
                subcategories: [
                    { id: 201, name: "Bungalows", description: "Single-story detached houses with garden space" },
                    { id: 202, name: "Duplexes", description: "Two-story houses ideal for large families" },
                    { id: 203, name: "Row Houses", description: "Connected houses in a series with shared walls" },
                    { id: 204, name: "Cottages", description: "Small, cozy houses typically in rural or suburban areas" }
                ]
            },
            {
                id: 3,
                title: "Villas",
                icon: "🏘️",
                subcategories: [
                    { id: 301, name: "Luxury Villas", description: "Premium properties with high-end amenities" },
                    { id: 302, name: "Beach Villas", description: "Exclusive properties near coastlines" },
                    { id: 303, name: "Mountain Villas", description: "Serene properties with scenic mountain views" },
                    { id: 304, name: "Golf Estate Villas", description: "Luxury homes adjacent to golf courses" }
                ]
            },
            {
                id: 4,
                title: "Commercial Spaces",
                icon: "🏪",
                subcategories: [
                    { id: 401, name: "Office Spaces", description: "Professional environments for businesses" },
                    { id: 402, name: "Retail Shops", description: "Storefronts in commercial areas" },
                    { id: 403, name: "Warehouses", description: "Large storage spaces for inventory" },
                    { id: 404, name: "Co-working Spaces", description: "Shared workspaces for professionals and startups" }
                ]
            },
            {
                id: 5,
                title: "PG & Co-living",
                icon: "👥",
                subcategories: [
                    { id: 501, name: "Student Hostels", description: "Accommodations near educational institutions" },
                    { id: 502, name: "Working Professional PGs", description: "Shared living for working individuals" },
                    { id: 503, name: "Family PGs", description: "Paying guest accommodations for families" },
                    { id: 504, name: "Co-living Spaces", description: "Modern shared living with premium amenities" }
                ]
            },
            {
                id: 6,
                title: "Farmhouses",
                icon: "🌄",
                subcategories: [
                    { id: 601, name: "Weekend Getaways", description: "Properties for short-term recreational stays" },
                    { id: 602, name: "Agricultural Farmhouses", description: "Properties with farming capabilities" },
                    { id: 603, name: "Luxury Farmhouses", description: "High-end countryside properties with premium amenities" },
                    { id: 604, name: "Eco Farms", description: "Sustainable living spaces with natural surroundings" }
                ]
            }
        ];
        
        // Try to find category by ID (as number)
        const numId = parseInt(categoryId);
        
        // First check if it's a main category
        const mainCategory = propertyTypes.find(type => type.id === numId);
        if (mainCategory) return mainCategory;
        
        // If not a main category, look through subcategories
        for (const mainCat of propertyTypes) {
            const subCat = mainCat.subcategories.find(sub => sub.id === numId);
            if (subCat) {
                // Return both the main category and subcategory
                return {
                    ...mainCat,
                    selectedSubcategory: subCat
                };
            }
        }
        
        return null;
    };
    
    const categoryData = getCategoryData();
    
    const handleBack = () => {
        // Remove modal-open class before navigation
        document.body.classList.remove('modal-open');
        // Use replace instead of navigate(-1) to avoid history stack issues
        navigate('/', { replace: true });
    };
    
    const navigateToSubcategory = (subId, title) => {
        const formattedTitle = encodeURIComponent(title);
        navigate(`/category/${subId}/${formattedTitle}`);
    };
    
    // Determine if we're looking at a subcategory
    const isSubcategory = decodedTitle.includes(' - ');
    
    // Show loading state while checking authentication
    if (loading) {
        return (
            <div className="category-details-page loading">
                <Header />
                <div className="loading-container">
                    <div className="loading-spinner"></div>
                    <p>Loading...</p>
                </div>
                <Footer />
            </div>
        );
    }
    
    // Only render content if authenticated
    if (!isAuthenticated) {
        return null; // This will be redirected by the useEffect
    }
    
    return (
        <div className="category-details-page">
            <Header />
            
            <div className="category-details-container">
                <div className="back-navigation">
                    <button className="back-button" onClick={handleBack}>
                        ← Back to Categories
                    </button>
                </div>
                
                {!isSubcategory && categoryData && (
                    <div className="subcategories-section">
                        <h3 className="subcategories-title">
                            {categoryData.title} Subcategories
                        </h3>
                        <div className="subcategories-grid">
                            {categoryData.subcategories.map(subcat => (
                                <div 
                                    key={subcat.id} 
                                    className="subcategory-card"
                                    onClick={() => navigateToSubcategory(subcat.id, `${categoryData.title} - ${subcat.name}`)}
                                >
                                    <h4>{subcat.name}</h4>
                                    <p>{subcat.description}</p>
                                    <button className="view-subcategory-btn">View Properties</button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                
                <CategoryDetails 
                    categoryId={parseInt(categoryId)} 
                    categoryTitle={decodedTitle} 
                />
            </div>
            
            <Footer />
        </div>
    );
}

export default CategoryDetailsPage;