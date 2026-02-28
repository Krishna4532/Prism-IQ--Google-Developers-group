import firebase_admin
from firebase_admin import credentials, db
import streamlit as st
import pandas as pd

@st.cache_resource
def get_db_connection():
    """Initializes the Firebase connection using secrets.toml."""
    try:
        if not firebase_admin._apps:
            # Safely pull the service account info from Streamlit secrets
            cred_info = dict(st.secrets["FIREBASE_SERVICE_ACCOUNT"])
            cred = credentials.Certificate(cred_info)
            firebase_admin.initialize_app(cred, {
                'databaseURL': st.secrets["FIREBASE_DB_URL"]
            })
        return db.reference('/')
    except Exception as e:
        st.error(f"Failed to connect to Firebase: {e}")
        return None

def fetch_all_students():
    """Fetches all student records from the database."""
    ref = get_db_connection()
    if ref:
        data = ref.child('students').get()
        if data:
            # Firebase returns a dict of dicts; convert to a list of dicts for Pandas
            if isinstance(data, dict):
                return pd.DataFrame(list(data.values()))
            elif isinstance(data, list):
                # Handle case where Firebase returns a list if keys are numeric
                return pd.DataFrame([x for x in data if x is not None])
    return pd.DataFrame()

def fetch_single_student(student_name):
    """
    Fetches a specific student by name. 
    Performs local filtering to avoid 'Index not defined' errors.
    """
    df = fetch_all_students()
    if not df.empty:
        # Filter locally in Python to bypass Firebase indexing rules
        student_df = df[df['name'].str.lower() == student_name.lower()]
        return student_df
    return pd.DataFrame()

def fetch_materials():
    """Fetches learning materials for the student portal."""
    ref = get_db_connection()
    if ref:
        data = ref.child('materials').get()
        if data:
            if isinstance(data, dict):
                return pd.DataFrame(list(data.values()))
            elif isinstance(data, list):
                return pd.DataFrame([x for x in data if x is not None])
    return pd.DataFrame()