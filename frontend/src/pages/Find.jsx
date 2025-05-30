import React , {useState}from 'react';
import TopBar from '../components/TopBar'
import "./Find.css"
import SearchBar from '../components/Searchbar'
import NavLinks from '../components/NavLinks'
import JobCard from '../components/JobCard'
import Pagelist from '../components/Pagelist'
import Filter from '../components/Filter'

function Find()  {
  const [filters, setFilters] = useState({
    sortOptions: [
      { label: 'best match', checked: false },
      { label: 'most recent', checked: false }
    ],
    salaryOptions: [
      { label: 'payed', checked: false },
      { label: 'unpayed', checked: false }
    ],
    jobTypeOptions: [
      { label: 'full time', checked: false },
      { label: 'freelance', checked: false },
      { label: 'internship', checked: false }
    ],
    categoryOptions: [
      { label: 'Category1', checked: false },
      { label: 'Category2', checked: false },
      { label: 'Category3', checked: false },
      { label: 'Category4', checked: false }
    ]
  });

  const handleFilterChange = (section, newOptions) => {
    setFilters(prev => ({
      ...prev,
      [`${section}Options`]: newOptions
    }));
  };

  const handleReset = () => {
    setFilters({
      sortOptions: filters.sortOptions.map(opt => ({ ...opt, checked: false })),
      salaryOptions: filters.salaryOptions.map(opt => ({ ...opt, checked: false })),
      jobTypeOptions: filters.jobTypeOptions.map(opt => ({ ...opt, checked: false })),
      categoryOptions: filters.categoryOptions.map(opt => ({ ...opt, checked: false }))
    });
  };
  return (
    <>
    <div className='findpage'>
    <div className='findpart1'>
      <TopBar color21 = "#003b99" color11="black" color31="black"></TopBar>
      </div>
      <div className='findpart2'>
        <div className='findsearch'>
        <SearchBar placeholder="search for a job"></SearchBar>
        </div>
        <div className='findlinks'>
          <NavLinks link1="All" link2="Jobs" link3="Interships" color1="black" color2="#003b99" color3="black"></NavLinks>
        </div>
      </div>
      <div className='findpart3'>
        <div className='searchjob'>
     
        <Filter
        sortOptions={filters.sortOptions}
        salaryOptions={filters.salaryOptions}
        jobTypeOptions={filters.jobTypeOptions}
        categoryOptions={filters.categoryOptions}
        onChange={handleFilterChange}
        onReset={handleReset}
      />      </div>
        <div className='findcards'>
            <div className='cardf'>
          <JobCard></JobCard>
          <JobCard></JobCard>
          <JobCard></JobCard>
          <JobCard></JobCard>
          <JobCard></JobCard>
          <JobCard></JobCard>
          <JobCard></JobCard>
          <JobCard></JobCard>
          <JobCard></JobCard>
          </div>
          <div className='pagelist'>
          <Pagelist></Pagelist>
          </div>
        </div>

      </div>
      </div>
      
    </>  
)
}

export default Find